# API Specifications Plan

## AUTH

POST: /api/auth/register - Create new user
POST: /api/auth/login - Authenticate user and return token

## USERS

GET: /api/users - Get all users
GET: /api/users/:id - Get user profile info
DELETE: /api/users/:id - Delete account

## GAMES

GET: /api/games - Get all games
GET: /api/games/search?query= - Search games via IGDB
GET: /api/games/:id - Fetch game details

## USER GAMES

GET: /api/usergames/:userId - Get all games linked to user
POST: /api/usergames - Add game to user’s library
PATCH: /api/usergames/:id - Update game status or notes
DELETE: /api/usergames/:id - Remove game entry

## REVIEWS

GET: /api/reviews/game/:gameId - Get all reviews for a game
GET: /api/reviews/user/:userId - Get all reviews for a user
POST: /api/reviews - Add a new review
DELETE: /api/reviews/:id - Remove review

A reasonable start - though more endpoints and parameters/queries will surely be added as I develop and make decisions.
