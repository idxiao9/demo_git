import React from 'react';
// react 中处理常用from表单数据绑定例子，实现了数据的双向绑定，实时渲染
function FormComponent(props){
		return (
				            <div>
				            <label>this is a new component</label>
				            	<form>
				            	<input type="text" 
				            			name="firstName"
							        	value={props.firstName} 
							        	placeholder="input something" 
							        	onChange={props.handleChange}
					        	/>
					        	<br />
					        	<input type="text" 
				            			name="lastName"
							        	value={props.lastName} 
							        	placeholder="input something" 
							        	onChange={props.handleChange}
					        	/>
					        	<h3>show info : {props.firstName} : {props.lastName} </h3>

					        	<br />
					        	<input 
						        	type="checkbox" 
						        	name="isHappy" 
						        	checked={props.isHappy} 
						        	onChange={props.handleChange}
					        	/>

					        	<br />
					        	<h3> {props.gender === "male" ? "He" : "She" } is really {props.isHappy ? "Happy" : "sad" } today!</h3>

					        	<br />
					        	<textarea 
					        		name="infoText"
					        		value={props.infoText}
					        		onChange={props.handleChange}
					        	/>

					        	<br />
					        	<h3> show the info :{props.infoText} </h3>

					        	<br />
					        	<input
					        		className="showTime" 
						        	type="radio" 
						        	name="gender" 
						        	onChange={props.handleChange} 
						        	value="male"
						        	checked={props.gender === "male"}
					        	/>male
					        	<input 
					        		className="showTime" 
						        	type="radio" 
						        	name="gender" 
						        	onChange={props.handleChange} 
						        	value="female"
						        	checked={props.gender === "female"}
					        	/>female

					        	<br />
					        	<select 
						        	value={props.food} 
						        	onChange={props.handleChange} 
						        	name="food"
					        	>
					        		<option>egg</option>
					        		<option>tomato</option>
					        		<option>noodles</option>
					        	</select>
					        	<h3> {props.food} is my favor</h3>
					        	</form>
				            </div>
			)
}


export default FormComponent