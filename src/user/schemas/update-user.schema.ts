import { z } from 'zod'

export const updateUserSchema = z
    .object({
        fname: z
            .string()
            .min(2, 'Description')
            .max(45, 'Description'),
        lname: z
            .string()
            .min(2, 'Description')
            .max(45, 'Description'),
        email: z
            .string()
            .email('Description')
            .max(255),
        phone: z
            
    })

export type CreateUserDto = z.infer<typeof updateUserSchema>


//  user_id           String   @id @default(uuid()) @db.Char(36)
//  fname        String   @db.VarChar(45)
//  lname        String   @db.VarChar(45)
//  email        String   @unique @db.VarChar(255)
//  passwordHash String   @map("password_hash") @db.VarChar(255)
//  role         UserRole @default(guest)
//  phone        String?  @db.VarChar(20)
//  isTokenized  Boolean  @default(false) @map("is_tokenized")
//  createdAt    DateTime @default(now()) @map("created_at")
//  updatedAt    DateTime @updatedAt @map("updated_at")
//  Relations
//  wallet             Wallet?
//  subscription       Subscription?
//  properties         Property[]
//  contractsAsOwner   Contract[]     @relation("OwnerContracts")
//  contractsAsGuest   Contract[]     @relation("GuestContracts")
//  sentMessages       Message[]
//  conversationsOwner Conversation[] @relation("OwnerConversations")
//  conversationsGuest Conversation[] @relation("GuestConversations")
//  reviews            Review[]
//  disputesOpened     Dispute[]
//  @@map("users")