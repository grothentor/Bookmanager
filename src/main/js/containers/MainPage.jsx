import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from '../actions/booksActions';
import Main from '../components/pages/Main.jsx';

class MainPage extends Component {
    static mapStateToProps(state) {
        const {
            books,
        } = state;
        return {
            books,
        };
    }

    static mapDispatchToProps(dispatch) {
        return {
            booksActions: bindActionCreators(booksActions, dispatch),
        }
    }

    render() {
        const {
            books,
        } = this.props;


        return (
            <Main
                books={books}
            />
        );
    }
}

export default  connect(MainPage.mapStateToProps, MainPage.mapDispatchToProps)(MainPage);
