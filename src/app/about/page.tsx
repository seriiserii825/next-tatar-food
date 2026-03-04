import PageContent from "@/components/UI/PageContent";
import Title from "@/components/UI/Title";
import { requireSession } from "@/lib/auth-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const { error } = await requireSession();
  if (error) {
    redirect("/?error=Unauthorized");
  }
  return (
    <div className="container">
      <Title />
      <PageContent alignCenter={true} />
    </div>
  );
}
