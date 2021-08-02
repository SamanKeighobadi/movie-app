import React from "react";
//? Tailwind CSS
import "../assets/main.css";
//? React Router
import { Switch, Route } from "react-router-dom";
//? Layouts
import MailLayouts from "./layouts/MailLayouts";
//? Components
import Trending from "./Trending";
import Movies from "./Movies";
import TvSeries from "./TvSeries";
import SinglePageMovie from "./SinglePageMovie";
import PageNotFound from './common/PageNotFound';
const App = () => {


  return (
    <div className="bg-gray-900 h-full">
      <MailLayouts>
        <div className="container mx-auto">
          <Switch>
            <Route path="/trending"  component={Trending} />
            <Route path="/" exact component={Movies} />
            <Route path="/tv-series" component={TvSeries} />
            <Route path="/single-movie" component={SinglePageMovie} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </MailLayouts>
    </div>
  );
};

export default App;
