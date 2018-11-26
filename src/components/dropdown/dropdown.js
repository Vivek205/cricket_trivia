import React, { Component} from 'react';
import css from './dropdown.module.css';

class DropDown extends Component {
    changeHandler =(e)=>{
        this.props.changed(e,this.props.id);

        // console.log('ref',this.refs.drop.value);
        // this.refs.drop.value = 'NA'
    }
    componentDidUpdate(){
        if(this.props.clear){
        this.refs[`dropDown${this.props.id}`].value = 'NA';}
       }
    render(){
    return (
        <div className={css.dropDown}> 
        <select
        ref={'dropDown'+this.props.id}
            onChange={this.changeHandler}>
            <option
             value='NA'
            //  selected={props.userAnswer === ''}
             >Please Select</option>
            {this.props.options.map((value,index) =>
                <option value={value.option} key={value.id}>{value.option}</option>
            )}
        </select>
        </div>
    );}
}

export default DropDown;