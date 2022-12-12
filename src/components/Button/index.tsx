import React, { useContext } from "react";
import { ModalContext } from "../../Context/Car/ModalContext";

interface ButtonProps{
    content:string
}

const Button = (props:ButtonProps) => {
    const {show}:any=useContext(ModalContext)
  return (
    <button
    onClick={show}
      className="my-1 w-[130px] text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] transition-transform"
    >
      {props.content}
    </button>
  );
};

export default Button;
