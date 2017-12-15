import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class App extends Component {
    static get propTypes() {
        return {
            location: PropTypes.object,
            routes: PropTypes.array,
            children: PropTypes.object,
        }
    }

    render() {

        return (
            <div className="app-container">
                <div className="inside-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default connect()(App);