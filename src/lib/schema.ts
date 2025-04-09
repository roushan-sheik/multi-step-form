import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const addressSchema = z.object({
  street: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().regex(/^\d{5,}$/, "Zip Code must be at least 5 digits"),
});

export const accountSchema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const multiStepFormSchema = z.object({
  ...personalInfoSchema.shape,
  ...addressSchema.shape,
  ...accountSchema.shape,
});

export type MultiStepFormData = z.infer<typeof multiStepFormSchema>;
