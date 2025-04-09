"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Footer />
    </div>
  );
};

export default layout;
