import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header'
import Home from '../containers/Home';
import Board from '../containers/Board';
import Weekly from '../containers/Weekly';
import Mypage from '../containers/Mypage';
import Login from '../containers/Login';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/board" component={Board} />
                <Route path="/weekly" component={Weekly} />
                <Route path="/mypage" component={Mypage} />
                <Route path="/login" component={Login} />
            </Router>
        )
    }
}
export default Routes;