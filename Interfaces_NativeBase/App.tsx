import { Box, Center, NativeBaseProvider, VStack } from "native-base";
import { Home } from "./src/screens";


export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}