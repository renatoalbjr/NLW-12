import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.send(users)
})

app
  .listen({
    port: 4333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:4333')
  })
