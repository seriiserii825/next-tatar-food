import Button from "./Button";

export default function HeaderMenuLoggedIn() {
  return (
    <div className="flex items-center gap-5">
      <div className="text-sm">
        Hello,{" "}
        <a target="_blank" href="maito:gus@mail.ru" className="text-warm-accent-light font-medium">
          gus@mail.ru
        </a>
      </div>
      <Button variant="secondary" size="sm">
        Logout
      </Button>
    </div>
  );
}
