import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { postFeedback } from '../../modules/services/FeedbackService';

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
            clear: {},
        }
    }


    addReviewToDatabase = (event) => {
        postFeedback(this.props.reduxState.feedbackReducer)
            .then((response) => {
                this.props.dispatch({
                    type: 'CLEAR_REDUX',
                    payload: this.state.clear
                })
                this.props.history.push('/success');
            })
    }
    goBack = (event) => {
        this.props.history.push('/comments')
    }

    render() {
        let disableButton = true;

        if( this.props.reduxState.feedbackReducer.feeling &&
            this.props.reduxState.feedbackReducer.understanding &&
            this.props.reduxState.feedbackReducer.support &&
            this.props.reduxState.feedbackReducer.comments) {
            disableButton = false;
        }
        return (
            <div>
                <div>
                    <h3>Review Your Feedback</h3>
                    <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                    <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                    <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                    <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                </div>
                <button onClick={this.goBack}>Back</button>
                <button disabled={disableButton} onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);

