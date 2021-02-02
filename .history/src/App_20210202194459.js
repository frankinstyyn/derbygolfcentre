import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import About from "./pages/About"

import { Route, Switch } from "react-router-dom";

import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop/:slug" component={Shop} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
