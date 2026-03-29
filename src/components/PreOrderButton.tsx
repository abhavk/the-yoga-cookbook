"use client";

import { type ReactNode, type MouseEvent } from "react";

export const PAYMENT_URL = "https://rzp.io/rzp/JkHFut7Z";
export const OPEN_CHECKOUT_EVENT = "preorder:open-checkout";

interface PreOrderButtonProps {
  children: ReactNode;
  className?: string;
}

export default function PreOrderButton({
  children,
  className,
}: PreOrderButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    window.dispatchEvent(new CustomEvent(OPEN_CHECKOUT_EVENT));
    document.getElementById("the-book")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <a href="#the-book" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
