import './App.css';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import AdminHome from "./components/AdminPanel/Pages/AdminHome/AdminHome";
import SingleEmployee from "./components/AdminPanel/Pages/SingleEmployee/SingleEmployee";
import MultipleEmployee from "./components/AdminPanel/Pages/MultipleEmployee/MultipleEmployee";
import EmployeeList from './components/AdminPanel/Pages/EmployeeList/EmployeeList';
import SendMail from './components/AdminPanel/Pages/SendMail/SendMail';

function App() {

  const pathName = window.location.pathname

  return (
    <Router>
    { pathName.includes("admin") ? <AdminPanel /> : null }
      <Switch>
        <Route exact path ="/" >
          <Home /> 
        </Route>
        <Route exact path="/admin">
          <AdminHome />
        </Route>
        <Route exact path="/admin/singleEmployee">
          <SingleEmployee />
        </Route>
        <Route exact path="/admin/multipleEmployee">
          <MultipleEmployee />
        </Route>
        <Route exact path="/admin/employeeList">
          <EmployeeList />
        </Route>
        <Route exact path="/admin/sendMail">
          <SendMail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
