import React from "react";
export default function Input(props:any) {
  return <input className="w-full px-2 py-0.5 rounded bg-gray-200 border-[1px] border-slate-400 focus:bg-white focus:outline-none focus:border-[blue] focus:shadow-[inset_0_0_0_1px_blue]"  {...props}/>;
}
