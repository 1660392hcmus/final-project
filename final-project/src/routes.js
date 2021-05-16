import React from 'react';
import { func, oneOfType, element, shape } from 'prop-types';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default class Routes extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/login" component={LoginPage} />
                  {/* <Route exact path="/register" component={RegisterPage} /> */}
                  {/* <Route
                    exact
                    path="/movies/detail/:movieId"
                    component={MovieDetailPage}
                  /> */}
                  {/* <Route exact path="/movies" component={MoviePage} /> */}
                  {/* <Route path="/reservation" component={ReservationPage} /> */}
                  {/* <Route exact path="/about" component={AboutPage} /> */}
                  {/* <Route exact path="/myCGV" component={MyCGVPage} /> */}
                  {/* <Route exact path="/myCGV/info" component={MyCGVInfoPage} /> */}
                  {/* <Route exact path="/myCGV/history" component={MyCGVHistoryPage} /> */}
                  {/* <Route exact path="/myCGV/canceled" component={MyCGVCanceledPage} /> */}
                </>
            </BrowserRouter>
          );
    }
  }