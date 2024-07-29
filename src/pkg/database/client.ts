import { PrismaClient } from '@prisma/client'

export interface DatabaseClientInterface {
  get(): PrismaClient
}

export class DatabaseClient implements DatabaseClientInterface {
  constructor(private db: PrismaClient) {}

  get(): PrismaClient {
    return this.db
  }
}
