import './App.css';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import AdminHome from "./components/AdminPanel/Pages/AdminHome/AdminHome";
import SingleEmployee from "./components/AdminPanel/Pages/SingleEmployee/SingleEmployee";
import MultipleEmployee from "./components/AdminPanel/Pages/MultipleEmployee/MultipleEmployee";

function App() {

  const pathName = window.location.pathname

  return (
    <Router>
    { pathName.includes("admin") ? <AdminPanel /> : null }
      <Switch>
        <Route exact path ="/" >
          <Home /> 
        </Route>
        <Route exact path ="/admin">
          <AdminHome />
        </Route>
        <Route path="/singleEmployee">
          <SingleEmployee />
        </Route>
        <Route path ="/multipleEmployee">
          <MultipleEmployee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
