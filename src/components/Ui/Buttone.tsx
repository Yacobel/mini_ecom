import type { ButtonHTMLAttributes ,ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  
}

function Button({ children, className, ...rest }: Iprops) {
  return (
    <>
      <button
        className={`${className} w-[50%] text-white capitalize font-bold py-2 rounded-md `}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
