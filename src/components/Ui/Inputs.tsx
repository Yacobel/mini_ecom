import type { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

function Inpute({ ...rest }: Iprops) {
  return (
    <>
      <input className="" {...rest} />
    </>
  );
}
export default Inpute;
