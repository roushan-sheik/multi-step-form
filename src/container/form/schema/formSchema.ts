import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const addressDetailsSchema = z.object({
  streetAddress: z.string().nonempty("Street Address is required"),
  city: z.string().nonempty("City is required"),
  zipCode: z
    .string()
    .min(5, "Zip Code must be at least 5 digits")
    .regex(/^\d+$/, "Zip Code must contain only numbers"),
});

export const accountSetupSchema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
