import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";

import { Characters } from "./src/screens/Characters/Characters";

const queryClient = new QueryClient();

export default function App() {
  const [fonstLoader] = useFonts({
    "Archivo-Black": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
  });

  if (!fonstLoader) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}
