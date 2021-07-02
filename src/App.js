import './App.css';
import CityInfo from './components/CityInfo';
import SightInfo from "./components/SightInfo";
import AllSightInfo from "./components/AllSightInfo";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Информация о городе</Link>
                    </li>
                    <li>
                        <Link to={"/sight"}>Достопримечательность</Link>
                    </li>
                    <li>
                        <Link to={"/all-sight"}>Достопримечательности</Link>
                    </li>
                    <li>
                        <Link to={"/gallery"}>Галерея</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path={"/"}>
                    <CityInfo />
                </Route>
                <Route path={"/sight"}>
                    <SightInfo />
                </Route>
                <Route path={"/all-sight"}>
                    <AllSightInfo />
                </Route>
                <Route path={"/gallery/:id"}>
                    <Gallery />
                </Route>
                <Route path={"/gallery"}>
                    <Gallery />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
