"use client";
import { ReactNode } from "react";
import LinkContextProvider from "../../utils/Store";
import Alert from "@/components/Alert";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <LinkContextProvider>
    {children}
    <Alert />
  </LinkContextProvider>;
}
