import { appRouter } from 'api'
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { createContext } from './context';
import ws from 'ws'

const app = express();
app.use(cors())

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

const server = app.listen(3434)

applyWSSHandler({
  wss: new ws.Server({ server }),
  router: appRouter,
  createContext,
})