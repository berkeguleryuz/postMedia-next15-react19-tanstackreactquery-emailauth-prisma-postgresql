import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Must be a valid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
    "Username can only contain letters, numbers, and special characters!",
  ),
  password: requiredString.min(8, "Password must be at least 8 characters"),
});
