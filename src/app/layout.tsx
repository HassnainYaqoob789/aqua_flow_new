import type { Metadata } from "next";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";

import ClientWrapper from "@/components/ClientWrapper"; 
import QueryProviderWrapper from "@/providers/QueryProviderWrapper";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* Wrap client logic and React Query provider */}
        <ClientWrapper>
          <QueryProviderWrapper>
            {children}
          </QueryProviderWrapper>
        </ClientWrapper>
      </body>
    </html>
  );
}
