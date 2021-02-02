import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Lessons from "./pages/Lessons"
import OpeningTimes from "./pages/OpeningTimes"
import Contact from "./pages/Contact"
import DrivingRange from "./pages/DrivingRange"

import { Route, Switch } from "react-router-dom";

import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/lessons" component={Lessons} />
        <Route exact path="/opening-times" component={OpeningTimes} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/driving-range" component={DrivingRange} />
        <Route exact path="/shop/:slug" component={Shop} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
