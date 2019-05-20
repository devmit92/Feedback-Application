import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Review from '../Review/Review';

class Supported extends Component {
    constructor(props) {
        super(props)
        this.state = {
            supported: '',
        }
    }

    changeSupport = (event) => {
        const inputValue = event.target.value;
        this.setState({
            supported: inputValue,
        });
    }

    addSupportToRedux = (event) => {
        this.props.dispatch({
            type: 'SUPPORT_REDUX',
            payload: this.state.supported,
        })
        this.props.history.push('/comments');
    }

    goBack = (event) => {
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <div>
                    <div>
                        <input 
                            type="number"
                            placeholder="Supported"
                            onChange={this.changeSupport}
                        />
                        <button  onClick={this.goBack}>Back</button>
                        <button  onClick={this.addSupportToRedux}>Next</button>
                    </div>
                </div>
                <Review/>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Supported);