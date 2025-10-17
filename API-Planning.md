# API Specifications Plan

## AUTH

POST: /api/auth/register - Create new user
POST: /api/auth/login - Authenticate user and return token

## USERS

GET: /api/users/:id - Get user profile info

## GAMES

GET: /api/games/search?query= - Search games via IGDB
GET: /api/games/:id - Fetch game details

## USER GAMES

GET: /api/usergames/:userId - Get all games linked to user
POST: /api/usergames - Add game to user’s library
PUT: /api/usergames/:id - Update game status or notes
DELETE: /api/usergames/:id - Remove game entry

## REVIEWS

GET: /api/reviews/:gameId - Get all reviews for a game
GET: /api/reviews/:userId - Get all reviews for a user
POST: /api/reviews - Add a new review

A reasonable start - though more endpoints and parameters/queries will surely be added as I develop and make decisions.
