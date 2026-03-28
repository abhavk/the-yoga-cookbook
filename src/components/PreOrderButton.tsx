"use client";

import { type ReactNode, type MouseEvent } from "react";

const PAYMENT_URL = "https://rzp.io/rzp/51eYgpd";

interface PreOrderButtonProps {
  children: ReactNode;
  className?: string;
}

export default function PreOrderButton({
  children,
  className,
}: PreOrderButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const width = 480;
    const height = 720;
    const left = Math.round(window.screenX + (window.outerWidth - width) / 2);
    const top = Math.round(window.screenY + (window.outerHeight - height) / 2);

    const popup = window.open(
      PAYMENT_URL,
      "instamojo_checkout",
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );

    if (popup) {
      e.preventDefault();
    }
  };

  return (
    <a href={PAYMENT_URL} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
