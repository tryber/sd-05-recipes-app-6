import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import MainReceipes from './pages/MainReceipes';
import Drinks from './pages/Drinks';
import FoodDetail from './pages/FoodDetail';
import DrinksDetails from './pages/DrinksDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodIng from './pages/ExploreFoodIng';
import ExploreDrinkIng from './pages/ExploreDrinkIng';
import ExploreFoodArea from './pages/ExploreFoodArea';
import Profile from './pages/Profile';
import MadeReceipes from './pages/MadeReceipes';
import FavoriteReceipes from './pages/FavoriteReceipes';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/receitas-feitas" component={MadeReceipes} />
        <Route path="/receitas-favoritas" component={FavoriteReceipes} />
        <Route path="/comidas/:id/in-progress" component={FoodInProgress} />
        <Route path="/comidas/:id" component={FoodDetail} />
        <Route path="/comidas" component={MainReceipes} />
        <Route path="/bebidas/:id/in-progress" component={DrinkInProgress} />
        <Route path="/bebidas/:id" component={DrinksDetails} />
        <Route path="/bebidas" component={Drinks} />
        <Route path="/explorar/comidas/ingredientes" component={ExploreFoodIng} />
        <Route path="/explorar/comidas/area" component={ExploreFoodArea} />
        <Route path="/explorar/comidas" component={ExploreFood} />
        <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinkIng} />
        <Route path="/explorar/bebidas" component={ExploreDrinks} />
        <Route path="/explorar" component={Explore} />
        <Route path="/perfil" component={Profile} />
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
