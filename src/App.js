import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "./Components/Container";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

import NotFound from "./views/NotFoundPage";

import routes from "./services/routes";
import "./App.css";

const App = () => (
  <Container>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.details} component={MovieDetailsPage} />

      <Route component={NotFound} />
    </Switch>
  </Container>
);
export default App;
