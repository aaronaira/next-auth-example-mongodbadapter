import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(Request) {
  const session = await getServerSession(authOptions);

  if (session) {
    return new Response(JSON.stringify(session), { status: 200 });
  } else {
    return new Response("Not authenticated user!", { status: 401 });
  }
}
