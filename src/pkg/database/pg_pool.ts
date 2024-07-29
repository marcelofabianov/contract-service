import { Pool } from 'pg'
import { env } from '@/env'

export const pool = new Pool({
  user: env.CO_DB_USER,
  password: env.CO_DB_PASSWORD,
  host: env.CO_DB_HOST,
  database: env.CO_DB_DATABASE,
  port: env.CO_DB_PORT,
  ssl: env.CO_DB_MODE === 'disable' ? false : { rejectUnauthorized: false },
  max: env.CO_DB_MAX_CONNECTIONS,
  idleTimeoutMillis: env.CO_DB_IDLE_TIMEOUT,
  connectionTimeoutMillis: env.CO_DB_TIMEOUT,
})
