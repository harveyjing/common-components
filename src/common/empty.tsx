import React from "react";
import emptyIcon from "../images/close.svg";

export default function Empty() {
  return (
    <div className={""}>
      <img
        src={emptyIcon}
        width={80}
        height={80}
        alt="empty"
        className="m-auto"
      ></img>
    </div>
  );
}
