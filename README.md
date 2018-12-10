# sample-graphql-answerer

A sample GraphQL question/answer service.

## Setup & Running

1. Clone the project
2. Install dependencies with yarn: `yarn install`
3. Build the project: `yarn build`
4. Start the server: `yarn start`
5. Go to <localhost:3000/graphql> for the GraphiQL browser

## Configuration

This project uses [dotenv](https://github.com/motdotla/dotenv) for configuration. Set the following variables:

```dosini
; Morgan's log format, defaults to "common"
; https://github.com/expressjs/morgan#api
LOG_LEVEL=dev

; Server's port, defaults to "3000"
PORT=3001
```
