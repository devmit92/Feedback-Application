import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux';
import { getFeedback } from '../../modules/services/FeedbackService';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';


class App extends Component {

  componentDidMount() {
    this.refreshFeedback();
  }

  refreshFeedback = () => {
    getFeedback()
      .then((response) => {
        this.props.dispatch({
          type: 'FEEDBACK_REDUX',
          payload: response.data,
        });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <div>
            <div>
              <div>
                <h1>Feedback Form</h1>
                <p>Don't forget it!</p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <Route exact path='/' component={Feeling} />
            <Route path='/understanding' component={Understanding} />
            <Route path='/supported' component={Support} />
            <Route path='/comments' component={Comments} />
            <Route path='/review' component={Review} />
          </div>
        </div>
      </Router>
    );
  }
}
export default connect(mapReduxStateToProps)(App);