// import { Flex, Heading } from "@chakra-ui/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Sample from "./Pages/Sample";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sample" component={Sample} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
