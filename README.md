# Fulhaus Backend
## Prerequisites
These software need to be installed on your machine first:
- Node.js
- MongoDB
## How To Run
Follow these steps for running the app:
1. Clone the source code from the public repository:
https://github.com/danndylan/fulhaus-be.git
2. From where the repository is clone, open a terminal. This API is created using express-generator. To start the app, run this command depending on environment:

    On MacOS or Linux, run the app with this command:

    `$ DEBUG=myapp:* npm start`

    On Windows Command Prompt, use this command:

    `> set DEBUG=myapp:* & npm start`


    On Windows PowerShell, use this command:

    `PS> $env:DEBUG='myapp:*'; npm start`

**Note: domain is set up locally as http://localhost:3000/**

## API Documentation

### Add Acronym

Method: POST

Endpoint: http://localhost:3000/api/acronym

Request Limit: None

### Request Body Data

"acronym" - Acronym (String)

"definition" - Definition of Acronym (String)

### List Acronym

Method: GET

Endpoint: http://localhost:3000/api/acronym?page=:page&limit=:limit&search=:search

Request Limit: None


### Request URL Query Params

"page" - Page number of pagination

"limit" - Limit of Acronyms shown

"search" - Fuzzy search term

### Update Acronym

Method: PATCH

Endpoint: http://localhost:3000/api/acronym/:acronymID

Request Limit: None

### Request URL Params

"acronymID" - Acronym of which to update

### Request Body Data

"acronym" - Acronym (String)

"definition" - Definition of Acronym (String)

### Delete Acronym

Method: Delete

Endpoint: http://localhost:3000/api/acronym/:acronymID

Request Limit: None

### Request URL Params

"acronymID" - Acronym of which to delete

## Examples

*See Postman Collection attached for examples.*
