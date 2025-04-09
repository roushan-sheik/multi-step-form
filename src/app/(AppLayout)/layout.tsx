"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div>
      <div>Header</div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <div>Footer</div>
    </div>
  );
};

export default layout;
