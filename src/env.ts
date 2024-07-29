import { z } from 'zod'
import { ErrorHandle } from './error'

const envSchema = z.object({
  CO_DB_HOST: z.string(),
  CO_DB_PORT: z.string().transform(Number),
  CO_DB_USER: z.string(),
  CO_DB_PASSWORD: z.string(),
  CO_DB_DATABASE: z.string(),
  CO_DB_MODE: z.string(),
  CO_DB_TIMEOUT: z.string().transform(Number),
  CO_DB_IDLE_TIMEOUT: z.string().transform(Number),
  CO_DB_MAX_CONNECTIONS: z.string().transform(Number),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new ErrorHandle(
    'Environment variables are not set correctly: ' + _env.error.format(),
  )
}

export const env = _env.data
