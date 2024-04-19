"use client"

import { z } from "zod"

export const donateFormSchema = z.object({
    firstName: z.string().min(2, {
        message: "its must be at least 2 characters"
    }).max(20, {
        message: "it cannot exceed 20 characters"
    }),
    lastName: z.string().min(2, {
        message: "its must be at least 2 characters"
    }).max(20, {
        message: "it cannot exceed 20 characters"
    }),
    donateMoney: z.string(),
    recurrence: z.string(),
    message: z.string().min(10, {
        message: "this message must be at least 10 characters"
    }).max(200, {
        message: "this message cannot exceed 200 characters"
    }),
    email: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
})
