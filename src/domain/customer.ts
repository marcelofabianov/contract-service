export class Customer {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly document: string,
    readonly enabled: boolean,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly deletedAt: Date | null,
  ) {}
}
