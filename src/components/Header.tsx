import { FiMenu, FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="py-4 shadow bg-white sticky top-0">
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="uppercase text-2xl font-bold text-rose-500">Travex</h1>

        <div className="flex items-center gap-2 text-2xl">
          <FiSearch className="header__icon" />
          <FiMenu className="header__icon" />
        </div>
      </div>
    </header>
  );
}
