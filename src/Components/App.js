import React from "react";
//? Tailwind CSS
import "../assets/main.css";
//? React Router
import { Switch, Route } from "react-router-dom";
//? Layouts
import MailLayouts from "./layouts/MailLayouts";
//? Components
import Trending from "./MoviesComponents/Trending";
import Movies from "./MoviesComponents/Movies";
import TvSeries from "./TvShowComponents/TvSeries";
import SinglePageMovie from "./MoviesComponents/SinglePageMovie";
import PageNotFound from './common/PageNotFound';
import SinglePageTv from "./TvShowComponents/SinglePageTv";
const App = () => {


  return (
    <div className="bg-gray-900 h-full">
      <MailLayouts>
        <div className="container mx-auto">
          <Switch>
            <Route path="/trending"  component={Trending} />
            <Route path="/" exact component={Movies} />
            <Route path="/tv-series" component={TvSeries} />
            <Route path="/single-movie/:movieId" component={SinglePageMovie} />
            <Route path="/single-tv/:tvId" component={SinglePageTv}  />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </MailLayouts>
    </div>
  );
};

export default App;
