import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Review from '../Review/Review';

class Understanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            understanding: ''
        }
    }

    changeUnderstanding = (event) => {
        const inputValue = event.target.value;
        this.setState({
            understanding: inputValue,
        });
    }

    addUnderstandingToRedux = (event) => {
        this.props.dispatch({
            type: 'UNDERSTANDING_REDUX',
            payload: this.state.understanding,
        })
        this.props.history.push('/supported');
    }

    goBack = (event) => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>How Well Did You Understand Today's Material?</h2>
                <div>
                    <div>
                        <input 
                            type="number"
                            placeholder="Understanding"
                            onChange={this.changeUnderstanding}
                        />
                        <button onClick={this.goBack}>Back</button>
                        <button onClick={this.addUnderstandingToRedux}>Next</button>
                    </div>
                </div>
                <Review/>
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(Understanding);