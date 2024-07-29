import { z } from 'zod'
import { ErrorHandle } from './error'

const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new ErrorHandle('Environment variables are not set correctly')
}

export const env = _env.data
