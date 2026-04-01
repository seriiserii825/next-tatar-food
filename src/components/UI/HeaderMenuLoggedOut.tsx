import Button from "./Button";

export default function HeaderMenuLoggedOut() {
  return (
    <div className="flex items-center gap-5">
      <Button variant="primary" size="sm">
        Login
      </Button>
      <Button href="/register" as="link" variant="secondary" size="sm">
        Register
      </Button>
    </div>
  );
}
