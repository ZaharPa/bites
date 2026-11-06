

# Bites - Restaurant API

A REST API for managing restaurants and customer reviews, built with Node.js, Express, TypeScript and Redis.

## Tech Stack

- Node.js
- Express
- TypeScript
- Redis
- Zod
- Nanoid
- OpenWeatherMap API

## Features

- **Restaurant Management** - Create, retrieve and manage restaurant records.
- **Reviews** - Add and retrieve restaurant reviews.
- **Request Validation** - Validate incoming requests using Zod schemas and middleware.
- **Redis Data Structures** - Use Redis Hashes, Sets and Sorted Sets to store and manage data.
- **Redis Search** - Search restaurants using Redis Search.
- **Duplicate Detection** - Use Bloom Filters to detect potential duplicate restaurant entries.
- **Caching** - Cache external API responses in Redis to reduce unnecessary requests.
- **Pagination** - Support paginated restaurant results.
- **Weather Integration** - Retrieve weather information using the OpenWeatherMap API.

## Getting Started

### Prerequisites

- Node.js
- pnpm or npm
- Redis

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd bites
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and configure the required environment variables:

```env
PORT=
REDIS_URL=
OPENWEATHER_API_KEY=
```

### Running the Application

```bash
npm run dev
```

The API will be available at `http://localhost:<PORT>`.

