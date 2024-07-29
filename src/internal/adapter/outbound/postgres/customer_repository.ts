import {
  CreateCustomerRepositoryInput,
  CustomerRepositoryInterface,
} from '@/internal/port/outbound/customer_repository_interface'
import { DatabaseClientInterface } from '@/pkg/database/client'

export class CustomerRepository implements CustomerRepositoryInterface {
  constructor(private db: DatabaseClientInterface) {}

  async create(input: CreateCustomerRepositoryInput): Promise<void> {
    console.log('Creating customer in Postgres:', input)
  }
}
