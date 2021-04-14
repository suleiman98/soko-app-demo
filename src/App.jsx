import Account from "./account/Account";
import { Switch, Route } from "react-router-dom";
import Categories from "./categories";
import Shoes from "./categories/shoes/Shoes";
import Home from "./home";
import CartIndex from "./cart/index";
import Jacket from "./categories/jackets/Jacket";
import Success from "./account/Success";

function App() {
  return (
    <div className="max-w-screen-sm space-y-4 mx-auto mt-4">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/shoes" component={Shoes} />
        <Route exact path="/categories/jacket" component={Jacket} />
        <Route exact path="/cart" component={CartIndex} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/successfull" component={Success} />
      </Switch>
    </div>
  );
}

export default App;
