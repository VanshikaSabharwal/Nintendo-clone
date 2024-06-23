"use server";
import { z } from "zod";
import axios from "axios";
import { ZodErrors } from "@/components/custom/ZodErrors";

const schemaRegister = z.object({
  username: z.string().min(3).max(20, {
    message: "Username must be between 3 to 20 charcters",
  }),
  email: z.string().email({
    message: "Please enter valid email",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 to 100 characters",
  }),
});

export async function registerUserAction(prevState: any, formData: FormData) {
  console.log("hello user registered");

  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }
  try {
    const response = await axios.post("/api/signIn", {
      name: validatedFields.data.username,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });
    return {
      ...prevState,
      data: response.data,
      message: "User Registered Successfully!",
    };
  } catch (error) {
    console.error("Error registering user:", error);

    return {
      ...prevState,
    };
  }
}
