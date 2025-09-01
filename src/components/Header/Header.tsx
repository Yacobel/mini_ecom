import type { ReactNode } from "react";

interface Iprops {
  title: string;
  children:ReactNode
}

function Header({ title , children }: Iprops) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg capitalize font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Header;
