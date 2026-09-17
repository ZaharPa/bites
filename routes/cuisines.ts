import express from "express";
import { initializeRedisClient } from "../utils/client.js";
import { successResponse } from "../utils/responses.js";
import { cuisineKey, cuisinesKey, restaurantKeyById } from "../utils/keys.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const client = await initializeRedisClient();
    const cuisines = await client.sMembers(cuisinesKey);
    return successResponse(res, cuisines);
  } catch (error) {
    next(error);
  }
});

router.get("/:cuisine", async (req, res, next) => {
  const { cuisine } = req.params;
  try {
    const client = await initializeRedisClient();
    const restaurantId = await client.sMembers(cuisineKey(cuisine));
    const restaurants = await Promise.all(
      restaurantId.map((id) => client.hGet(restaurantKeyById(id), "name")),
    );
    return successResponse(res, restaurants);
  } catch (error) {
    next(error);
  }
});

export default router;
