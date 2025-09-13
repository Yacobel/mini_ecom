import type { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

function Inpute({ ...rest }: Iprops) {
  return (
    <>
      <input
        className="p-2  border-2 w-full  border-gray-300  shadow-md rounded-md
           focus:border-blue-400 focus:outline-none focus:ring-blue-700
           text-md"
        {...rest}
      />
    </>
  );
}
export default Inpute;
