import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UpdateTask from './Components/UpdateTask';
import ViewTask from './Components/ViewTask';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
          <Route path="/addtask">
            <AddTask />
          </Route>
          <Route path="/viewtask">
            <ViewTask />
          </Route>
          <Route path="/updatetask/:id">
            <UpdateTask />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
