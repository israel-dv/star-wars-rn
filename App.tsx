import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./src/components/Navigators/AppNavigator";

const queryClient = new QueryClient();

export default function App() {
  const [fonstLoader] = useFonts({
    "Archivo-Black": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
  });

  if (!fonstLoader) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
