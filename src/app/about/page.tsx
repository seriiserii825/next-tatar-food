import Title from "@/components/UI/Title";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session, "session");
  if (!session) {
    redirect("/");
  }
  return (
    <div className="container">
      <Title />
    </div>
  );
}
