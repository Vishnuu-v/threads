import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().min(3, {message: "minimum 3 characters"}),
    accountId: z.string(),
})

export const CoomentValidation = z.object({
    thread: z.string().min(3, {message: "minimum 3 characters"}),
    accountId: z.string(),
})