import type { HTMLAttributes } from "react";

interface Iprops extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

export const Colores = ({ color, ...rest }: Iprops) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className={` w-6 h-6 block rounded-full`}
      {...rest}
    ></span>
  );
};
