import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './questions.module.css';
import _ from 'lodash';

import Question from '../../components/question/question';
import DropDown from '../../components/dropdown/dropdown';
import Button from '../../components/button/button';

class Questions extends Component {

    drop = React.createRef();


    changeHandler = (e, questionId) => {
        let data = _.cloneDeep(this.props.data);
        let index = data.questions.findIndex(question => question.id === questionId);
        if (data.questions[index].answer.option === e.target.value) {
            data.questions[index].valid = true;
            data.questions[index].answeredCorrect = true;
        } else {
            data.questions[index].answeredCorrect = false;
            if (e.target.value !== 'NA') {
                data.questions[index].valid = true;
            } else {
                data.questions[index].valid = false;
            }

        }
        this.props.onAnswering(data);
    }

    validator = () => {
        let submitObj = {
            valid: true,
            correct: 0,
            incorrect: 0
        };
        for (let question of this.props.data.questions) {
            if (question.valid === false) {

                submitObj.valid = false;
            }
            if (question.answeredCorrect) {
                submitObj.correct += 1;
            }
        }
        submitObj.incorrect = this.props.data.questions.length - submitObj.correct;
        return submitObj;
    }

    submitHandler = () => {
        let submitObj = this.validator();

        if (submitObj.valid) {
            this.props.onSubmitting(submitObj);
        } else {
            alert('Please answer all the questions');
            return;
        }
    }
    // 
    clearHandler = () => {
        this.props.onClearing();
    }

    render() {
        return (
            <div className={css.questions}>
                {this.props.data.questions.map((value) =>

                    <div key={value.id}
                        className={this.props.submitted ?
                            value.answeredCorrect ? '' : css.incorrect : ''}>
                        <Question
                            question={value.question}

                        />
                        <DropDown
                            ref={this.drop}
                            clear={this.props.clear}
                            id={value.id}
                            options={value.options}
                            userAnswer={value.userAnswer}
                            changed={this.changeHandler} />
                    </div>
                )
                }
                <div className={css.buttons}>
                    <Button
                        type='submit'
                        // disabled 
                        clicked={this.submitHandler} />
                    <Button type='clear'
                        clicked={this.clearHandler} /></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        clear: state.clear,
        submitted: state.submitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAnswering: (updatedAnswer) => dispatch({ type: 'UPDATE_ANSWER', payload: updatedAnswer }),
        onSubmitting: (submitObj) => dispatch({ type: 'SUBMIT', payload: submitObj }),
        onClearing: () => dispatch({ type: 'CLEAR' })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);