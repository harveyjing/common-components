import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, MouseEvent, ReactElement, useState } from "react";
import Divider from "../divider";

export type DropdownProps = {
  data: (
    | {
        name: string;
        active: boolean;
        onClick(e: MouseEvent): void;
      }
    | "divider"
  )[];
  children?: ReactElement | string;
}

export default function Dropdown({
  data,
  children,
}: DropdownProps ) {
  const [animation, setAnimation] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onAnimationEnd={() => setAnimation(false)}
        onClick={() => setAnimation(true)}
        className={`${
          (animation && "animate-wiggle ") || ""
        }inline-flex h-10 w-10 justify-center items-center rounded-full bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        {children}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 text-slate-600 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {data.map((item, idx) => {
            if (item === "divider") {
              return <Divider key={idx}/>;
            } else {
              return (
                <Menu.Item key={item.name} disabled={!item.active}>
                  {({ active }) => (
                    <button
                      className={`${
                        (active && "bg-primary-400") || "cursor-not-allowed"
                      } p-1 w-full rounded-md`}
                      onClick={(e) => item.onClick(e)}
                    >
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              );
            }
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
