import AddRecipeBtn from "./AddRecipeBtn";
import AuthMenu from "./AuthMenu";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = [false];
  return (
    <header>
      <div className="container">
        <div className="w-full mx-auto py-6 flex items-center justify-between">
          <Logo />
          <Menu />
          {isLoggedIn ? <AddRecipeBtn /> : <AuthMenu />}
        </div>
      </div>
    </header>
  );
}
