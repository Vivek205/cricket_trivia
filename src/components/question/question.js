import React from 'react';
import css from './question.module.css';

const question = (props) => {
    return(
        <div className={css.question}>
    <span >{props.question}</span>
    </div>);
}

export default question;