import React, { useEffect } from "react";
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

const App = () => {
  return (
    <div className="bg-gray-900 h-full">
      <MailLayouts>
        <div className="container mx-auto">
          <Switch>
            <Route path="/trending" exact component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/tv-series" component={TvSeries} />
          </Switch>
        </div>
      </MailLayouts>
    </div>
  );
};

export default App;
