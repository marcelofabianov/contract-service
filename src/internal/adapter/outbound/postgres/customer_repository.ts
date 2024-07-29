import {
  CreateCustomerRepositoryInput,
  CustomerRepositoryInterface,
} from '@/internal/port/outbound/customer_repository_interface'

export class CustomerRepository implements CustomerRepositoryInterface {
  constructor() {}

  async create(input: CreateCustomerRepositoryInput): Promise<void> {
    console.log('Creating customer in Postgres:', input)
  }
}
