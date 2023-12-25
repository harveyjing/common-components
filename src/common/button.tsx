import React from "react";
import { AnchorHTMLAttributes } from "react";
import { classNames } from "./util";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded bg-primary-600 py-0 px-2",
        `${props.disabled && "bg-gray-300" || "text-white"}`,
        props.className || ""
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
type AnchorProps =AnchorHTMLAttributes<HTMLAnchorElement> & {
  isButton?: boolean;
  disabled?: boolean;
};

export function Anchor(
  props: AnchorProps
) {
  const {isButton, disabled, ...otherProps} = props;

  return (
    <a
      {...otherProps}
      className={`${classNames(
        "px-2 py-0.5 flex justify-center",
        (props?.isButton && "rounded font-mono") || "",
        `${props.disabled && "bg-gray-300 text-inherit" || "text-white bg-primary-600"}`,
        props.className || ""
      )}`}
    >
      {props.children}
    </a>
  );
}
