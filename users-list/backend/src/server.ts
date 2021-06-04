import express from 'express'
import { v4 as uuid } from 'uuid'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }))

interface User {
  id: string
  name: string
  email: string
}

const users: User[] = []

// localhost:3333/users

// Métodos HTTP - GET | POST | PUT | DELETE

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/users', (request, response) => {
  const { name, email } = request.body
  const user = { id: uuid(), name, email }

  users.push(user)
  return response.json(user)
})

app.put('/users/:id', (request, response) => {
  const { id } = request.params
  const { name, email } = request.body

  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex < 0) {
    response.status(404).json({ error: 'User not found' })
  } else {
    const user = { id, name, email }

    users[userIndex] = user

    return response.json(user)
  }
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex < 0) {
    response.status(404).json({ error: 'User not found' })
  } else {
    users.splice(userIndex, 1)

    return response.status(204).send()
  }
})

// Porta
app.listen('3333', () => {
  console.log('Servidor ligado')
})
