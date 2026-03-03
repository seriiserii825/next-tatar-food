import AddRecipeBtn from "./AddRecipeBtn";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="w-full mx-auto py-6 flex items-center justify-between">
          <Logo />
          <Menu />
          <AddRecipeBtn />
        </div>
      </div>
    </header>
  );
}
