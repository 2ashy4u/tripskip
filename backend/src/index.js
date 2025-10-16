const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Pool } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'appdb'
})

app.get('/health', async (_req, res) => {
  try {
    const r = await pool.query('SELECT 1 as ok')
    res.json({ ok: true, db: r.rows[0].ok === 1 })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
})

app.get('/', (_req, res) => {
  res.json({ message: 'Backend API is running' })
})

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
