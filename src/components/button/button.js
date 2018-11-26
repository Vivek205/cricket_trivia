import React from 'react';
import css from './button.module.css';

const button = (props) => {
    return(
    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={props.type === 'submit' ? css.submit : css.clear} >
        {props.type === 'submit'? 'Submit' : 'Clear Values'}
    </button>);
}

export default button;