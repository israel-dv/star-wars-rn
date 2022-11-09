import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";

import { PeopleScreen } from "./src/screens/People/PeopleScreen";

const queryClient = new QueryClient();

export default function App() {
  const [fonstLoader] = useFonts({
    "Archivo-Black": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
  });

  if (!fonstLoader) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <PeopleScreen />
    </QueryClientProvider>
  );
}
