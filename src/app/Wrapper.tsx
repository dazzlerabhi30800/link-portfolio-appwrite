"use client";
import { ReactNode } from "react";
import LinkContextProvider from "../../utils/Store";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <LinkContextProvider>{children}</LinkContextProvider>;
}
