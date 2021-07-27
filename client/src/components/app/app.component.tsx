import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './home.style.css';
import { HomePageStateType } from "./home.types";

const HomePage = () => {
    // const [pageState, setPageState] = React.useState<HomePageStateType>({
    //     transactions: null,
    //     currenciesRates: null,
    //     isLoading: true
    // });
    //
    // useEffect(() => {
    //     // fetchHomeData().then(newState => {
    //     //     setPageState(newState);
    //     // }).catch(error => {
    //     //     logError(error);
    //     // });
    // }, [])
    //
    // const {isLoading, currenciesRates, transactions} = pageState;
    //
    // if (isLoading) {
    //     return <div className="app"> Loading ...</div>
    // }
    //
    // if (!currenciesRates || !transactions) {
    //     return <div className="app">Data could not be fetched from the server</div>
    // }
    //
    // return (
    //     <div className="app">
    //         <h1>Tx Group Code Challenge</h1>
    //         <h6>By Tiago Almeida</h6>
    //     </div>
    // );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
