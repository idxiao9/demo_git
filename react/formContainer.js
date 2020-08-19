import React ,{ Component } from 'react';
import FormComponent from './formComponent.js';

class FormContainer extends Component{
	// 奇怪这里怎么不用写super什么的，而且方法也不用绑定？
	state = {
        	firstName:"",
        	lastName: "",
        	isHappy: false,
        	infoText:"",
        	gender: "",
        	food:""
        }
       
    handleChange=(event)=>{
    	const {name , value,type, checked} = event.target
		// 根据input类型修改name的值
    	type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({[name]: value})
    	
    }
	render(){
		return (
				<div>
					<FormComponent handleChange={this.handleChange} {...this.state}/>
				</div>
			)
	}

}

export default FormContainer