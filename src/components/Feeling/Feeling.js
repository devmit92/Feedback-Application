import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Review from '../Review/Review';

class Feeling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeling: ''
        }
    }

    changeFeeling = (event) => {
        const inputValue = event.target.value;
        this.setState({
            feeling: inputValue,
        });
    }

    addFeelingToRedux = (event) => {
        this.props.dispatch({
            type: 'FEELINGS_REDUX',
            payload: this.state.feeling,
        })
        this.props.history.push('/understanding');
    }

    goToAdminPage = (event) => {
        this.props.history.push('/admin')
    }


    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <div>
                    <div>
                        <input 
                            type="number"
                            placeholder="Feeling"
                            onChange={this.changeFeeling}
                        />
                        <button onClick={this.addFeelingToRedux}>Next</button>
                        <button onClick={this.goToAdminPage}>Admin</button>
                    </div>
                </div>
                <Review />
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(Feeling);