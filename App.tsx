import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Characters } from "./src/screens/Characters/Characters";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}
