import { usePathname } from "next/navigation";
import Button from "./Button";

export default function HeaderMenuLoggedOut() {
  const pathName = usePathname();
  const loginActive = pathName === "/login" ? "primary" : "secondary";
  const registerActive = pathName === "/register" ? "primary" : "secondary";
  return (
    <div className="flex items-center gap-5">
      <Button href="/login" as="link" variant={loginActive} size="sm">
        Login
      </Button>
      <Button href="/register" as="link" variant={registerActive} size="sm">
        Register
      </Button>
    </div>
  );
}
