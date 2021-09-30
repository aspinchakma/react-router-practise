import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DisplayMeal from './components/DisplayMeal/DisplayMeal';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Resturent from './components/Resturent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/meals">
            <Resturent></Resturent>
          </Route>
          <Route path="/meal/:mealId">
            <DisplayMeal></DisplayMeal>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
