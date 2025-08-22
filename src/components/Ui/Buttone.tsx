import type { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className: string;
}

function Button({ children, className }: Iprops) {
  return (
    <>
      <button
        className={`${className} w-[50%] text-white capitalize font-bold py-2 rounded-md `}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
