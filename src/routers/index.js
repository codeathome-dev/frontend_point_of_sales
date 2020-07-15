import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import LandingPage from "pages/LandingPage";
import Category from "containers/Category";
import Signin from "containers/Signin";
import LandingPage from "containers/LadingPage";
import CategoryCreate from "containers/Category/create";
import Navbar from "components/Navbar";
import Logout from "containers/Logout";

// redux
// import Counter from "../example/counter";
// import GetCounter from "../example/getCounter";
// import CounteHook from "../example/counter2";
// import GetCounterHook from "../example/getCounter2";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/admin/signin" component={Signin} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin/category" component={Category} />
        <Route path="/admin/category/create" component={CategoryCreate} />
        <Route path="/admin/logout" component={Logout} />

        {/* <Route path="/count" component={Counter} />
        <Route path="/get-count" component={GetCounter} />

        <Route path="/count-hook" component={CounteHook} />
        <Route path="/get-count-hook" component={GetCounterHook} /> */}
      </Switch>
    </Router>
  );
}

export default App;
