# API Specifications Plan

## AUTH

POST: /api/auth/register - Create new user
POST: /api/auth/login - Authenticate user and return token
POST: /api/auth/logout - Log out user and invalidate token

## USERS

GET: /api/users - Get all users (support query params: ?page=, ?limit=, ?search=)
GET: /api/users/:id - Get user profile info
PATCH: /api/users/:id - Update profile info
DELETE: /api/users/:id - Delete account

## GAMES

GET: /api/games - Get all games (supports pagination, filters like ?platform=, ?genre=)
GET: /api/games/:id - Fetch game details

## USER GAMES

GET: /api/users/:id/games - Get all games linked to user (support query params: ?status=, ?platform=)
POST: /api/users/:id/games - Add game to user's library (body: { gameId, status, notes })
GET: /api/users/:id/games/:gameid - Get specific game linked to a user
PATCH: /api/users/:id/games/:gameid - Update game status or notes
DELETE: /api/users/:id/games/:gameid - Remove game entry

## REVIEWS

GET: /api/games/:gameId/reviews - Get all reviews for a game
GET: /api/users/:userId/reviews - Get all reviews for a user
POST: /api/reviews - Add a new review
PATCH: /api/reviews/:id - Edit review
DELETE: /api/reviews/:id - Remove review

A reasonable start - though more endpoints and parameters/queries will surely be added as I develop and make decisions.
