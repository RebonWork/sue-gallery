"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <SessionProvider>
        {children}
        </SessionProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default Provider;
