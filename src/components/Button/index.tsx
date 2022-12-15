import React, { useContext } from "react";
import { TypeContext } from "../../Context/Car/Types";

interface ButtonProps{
    content:string
}

const Button = (props:ButtonProps) => {
    const {displayModalAdd}:any=useContext(TypeContext)
  return (
    <button
    onClick={displayModalAdd}
      className="my-1 w-[130px] text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] transition-transform"
    >
      {props.content}
    </button>
  );
};

export default Button;
