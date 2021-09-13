import { Flex, Heading } from "@chakra-ui/layout";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Flex w="100%">
      {/* <Heading
          ml="20"
          size="md"
          fontweight="semibold"
          color="black"
          textAlign="center"
        >
          Arnan
        </Heading> */}
      <Login />
    </Flex>
  );
}

export default App;
