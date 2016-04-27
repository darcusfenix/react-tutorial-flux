import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

import ServiceCreate from "./pages/service/Create"
import ServiceEdit from "./pages/service/Edit"
import ServiceShow from "./pages/service/Show"
import Services from "./pages/services/Index";


const app = document.getElementById('app');
const s = {id : 3, name : "wfenod", age : 22, gender : "erwd"}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="services" component={Services}></Route>
      <Route path="services/:id/edit" component={ServiceEdit}></Route>
      <Route path="services/:id/show" component={ServiceShow}></Route>
      <Route path="services/create" component={ServiceCreate}></Route>
    </Route>
  </Router>,
  app);
