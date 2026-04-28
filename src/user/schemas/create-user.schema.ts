import { z } from 'zod'

export const createUserSchema = z.object({
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
        password: z
            .string()
            .min(8, 'description')
            .regex(/[A-Z]/).regex(/[0-9]/, 'description')
            .regex(/[!@#$%^&*(),.?":{}|<>]/, 'description'),
        role: z
            .enum(['guest', 'owner', 'admin']),
    })

export type CreateUserDto = z.infer<typeof createUserSchema>