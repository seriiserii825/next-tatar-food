import AddRecipeBtn from "./AddRecipeBtn";
import AuthMenu from "./AuthMenu";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [isLoggedIn] = [false];
  return (
    <header>
      <div className="container">
        <div className="mx-auto flex w-full items-center justify-between py-6">
          <Logo />
          <Menu />
          {isLoggedIn ? <AddRecipeBtn /> : <AuthMenu />}
        </div>
      </div>
    </header>
  );
}
