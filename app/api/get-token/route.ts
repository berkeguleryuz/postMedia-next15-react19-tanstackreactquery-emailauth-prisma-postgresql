import { validateRequest } from "@/auth";

export async function GET() {
  try {
    const { user } = await validateRequest();
    console.log("Calling get-token for user: ", user?.id);

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;

    const issuedAt = Math.floor(Date.now() / 1000) - 60
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
