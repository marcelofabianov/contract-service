export interface CreateCustomerRepositoryInput {
  name: string
  document: string
}

export interface CreateCustomerRepository {
  create(input: CreateCustomerRepositoryInput): Promise<void>
}

export interface CustomerRepositoryInterface extends CreateCustomerRepository {}
