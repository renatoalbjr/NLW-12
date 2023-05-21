import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string().uuid(),
})
const bodySchema = z.object({
  coverUrl: z.string(),
  content: z.string(),
  isPublic: z.coerce.boolean(),
})

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async (req, res) => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    res.status(200).send(
      memories.map((m) => {
        return {
          id: m.id,
          coverUrl: m.coverUrl,
          excerpt: m.content
            .substring(0, 115)
            .concat(m.content.length > 115 ? '...' : ''),
        }
      }),
    )
  })

  app.get('/memories/:id', async (req, res) => {
    const { id } = paramsSchema.parse(req.params)
    try {
      const memory = await prisma.memory.findUniqueOrThrow({
        where: {
          id,
        },
      })
      res.status(200).send(memory)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  app.post('/memories', async (req, res) => {
    const { content, coverUrl, isPublic } = bodySchema.parse(req.body)

    try {
      const memories = await prisma.memory.create({
        data: {
          content,
          coverUrl,
          isPublic,
          userId: '968ffaab-bb13-4322-ba31-26a2bf4a2134',
        },
      })
      res.status(201).send(memories)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  app.put('/memories/:id', async (req, res) => {
    const { content, coverUrl, isPublic } = bodySchema.parse(req.body)
    const { id } = paramsSchema.parse(req.params)
    try {
      const memories = await prisma.memory.update({
        where: {
          id,
        },
        data: {
          content,
          coverUrl,
          isPublic,
          userId: '968ffaab-bb13-4322-ba31-26a2bf4a2134',
        },
      })
      res.status(200).send(memories)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  app.delete('/memories/:id', async (req, res) => {
    const { id } = paramsSchema.parse(req.params)
    try {
      const memories = await prisma.memory.delete({
        where: {
          id,
        },
      })
      res.send(memories)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })
}
