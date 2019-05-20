import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import Review from '../Review/review';

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
        }
    }

    changeComment = (event) => {
        const inputValue = event.target.value;
        this.setState({
            comment: inputValue,
        });
    }

    commentsToRedux = (event) => {
        this.props.dispatch({
            type: 'COMMENT_REDUX',
            payload: this.state.comment,
        })
        this.props.history.push('/review');
    }

    clickBackButton = (event) => {
        this.props.history.push('/supported');
    }

    render() {
        return (
            <div>
            <h2>Leave A Comment</h2>
            <p>
            Comments
            </p>
            <input 
                type="text"
                placeholder="comments"
                onChange={this.changeComment} />
            <button onClick={this.clickBackButton}>BACK</button>    
            <button onClick={this.commentsToRedux}>NEXT</button>
        </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Comments);