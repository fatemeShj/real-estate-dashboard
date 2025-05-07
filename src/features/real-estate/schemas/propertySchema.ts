import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.string().min(1, "Price is required"),
  location: z.string().min(2, "Location must be at least 2 characters"),
});

export type PropertyFormValues = z.infer<typeof propertySchema>;
