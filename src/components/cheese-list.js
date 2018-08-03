import React from 'react';
import {connect} from 'react-redux';
import { fetchCheesesRequest } from '../actions/cheese';

export default class CheeseList extends React.Component {

    renderResults() {
        const cheeseMap = [].map(cheese =>
            <li>{cheese}</li>
        );
        return cheeseMap
    }

    render() {
        return (
            <div>
            <span>Hello</span>
              {this.renderResults()}
            </div>
        );
    }
}

const mapStateToProps = state => console.log('I am the state', state) || ({
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
});

//export default connect(mapStateToProps)(CheeseList);
