"use client";

import { propertySchema } from "../schemas/propertySchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";

export default function AddPropertyForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      price: "",
      location: "",
    },
    onSubmit: async ({ value }) => {
      const result = propertySchema.safeParse(value);

      if (!result.success) {
        console.log("Validation errors:", result.error.flatten().fieldErrors);
        alert("Please fix the validation errors.");
        return;
      }

      console.log("Valid data:", result.data);
      alert("Form submitted!");
    },
  });

  return (
    <form onSubmit={form.handleSubmit} className="space-y-4 mt-8">
      <form.Field name="title">
        {(field) => (
          <div>
            <label>title</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      </form.Field>

      <form.Field name="price">
        {(field) => (
          <div>
            <label>price</label>
            <Input
              type="number"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      </form.Field>

      <form.Field name="location">
        {(field) => (
          <div>
            <label>location</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      </form.Field>

      <Button type="submit">Save Property</Button>
    </form>
  );
}
