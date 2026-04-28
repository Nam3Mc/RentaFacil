import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common"
import { PrismaClient } from "src/generated/prisma/index.js"
import { PrismaPg } from "@prisma/adapter-pg"

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient

  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    })
    this.client = new PrismaClient({ adapter })
  }

  async onModuleInit() {
    await this.client.$connect()
  }

  async onModuleDestroy() {
    await this.client.$disconnect()
  }

  // Proxy para acceder a los modelos directamente
  get user() { return this.client.user }
  get wallet() { return this.client.wallet }
  get plan() { return this.client.plan }
  get subscription() { return this.client.subscription }
  get property() { return this.client.property }
  get propertyDocument() { return this.client.propertyDocument }
  get contract() { return this.client.contract }
  get payment() { return this.client.payment }
  get conversation() { return this.client.conversation }
  get message() { return this.client.message }
  get review() { return this.client.review }
  get dispute() { return this.client.dispute }
}