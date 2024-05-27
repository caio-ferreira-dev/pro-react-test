import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { DeviceWidthProvider } from "../../context/DeviceWidthContext";

const client = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <DeviceWidthProvider>
        <Component {...pageProps} />
      </DeviceWidthProvider>
    </QueryClientProvider>
  )
}
