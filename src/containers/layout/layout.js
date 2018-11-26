import React, { Component } from 'react';
import css from './layout.module.css';
import { connect } from 'react-redux';

import Questions from '../questions/questions';
import Graph from '../../components/graph/graph';


class Layout extends Component {
    // 
    render() {
        return (
            <>
                <h2>Cricket Trivia</h2>
                <div className={css.layout}>
                    <Questions />
                    <Graph data={[
                        ["Element", "Density", { role: "style" }],
                        ["Correct", this.props.correct, "black"],
                        ["Incorrect", this.props.incorrect, "black"],
                    ]} />
                </div>
            </>
        );
    }
}
const matchStateToProps = state => {
    return {
        correct: state.correct,
        incorrect: state.incorrect
    }
}
export default connect(matchStateToProps)(Layout);

