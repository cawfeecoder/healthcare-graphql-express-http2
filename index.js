const port = 3000
import spdy from 'spdy';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import path from 'path'
import fs from 'fs'
import HealthCareSchema from './graphql/schema'

const app = express()

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: HealthCareSchema,
  graphiql: true
}));

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}

spdy
    .createServer(options, app)
    .listen(port, (error) => {
      if (error) {
        console.error(error)
        return process.exit(1)
      } else {
        console.log('Listening on port: ' + port + '.')
      }
    });
