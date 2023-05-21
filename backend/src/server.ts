import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
