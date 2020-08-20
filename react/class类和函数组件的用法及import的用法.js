// { Component } 要这样写 因为他肯定是用export + 表达式 导出的
import React ,  { Component } from 'react';
import { render } from 'react-dom';


// export + 表达式 导出的 不能export + 已经定义好的变量名 这样会出错？

//  class 类的写法 ，一定会有个带返回值的 render方法
 export class Note extends Component {
	render () {	
		// 可以在render方法中直接获取到props内容
		let  data = this.props
		return(
			<div>
			<h1>show them this message {this.props.info}</h1>
			</div>
			)
	}
}

class NewNote extends Component {
	render() {
		return(
			<div>
			<h1>show them anther message</h1>
			</div>
			)
	}
}

export default NewNote


// function 组件的写法，也可以函数内定义自己的方法
export function Foo (props) {

	function handler(){
		console.log("something happened!")
	}
	return(
		// 这里的handler不要（），会直接调用
		<div onClick = { handler } >welcome to my place! {props.user } </div>
		)
}



// import  NewNote , { Foo ,Note as NoteBook  } from '../newproject/index.js';
// import 的时候 export default 导出的要写在｛｝外 ，
// 使用export导出的成员，必须严格按照导出时候的名称，来使用{ }按需接收，名字一样，排序不影响结果。


// 1、export default 向外暴露的成员，可以使用任意变量来接收

// 2、在一个模块中，export default 只允许向外暴露一次

// 3、在一个模块中，可以同时使用export default 和export 向外暴露成员

// 4、使用export向外暴露的成员，只能使用{ }的形式来接收，这种形式，叫做【按需导出】

// 5、export可以向外暴露多个成员，同时，如果某些成员，在import导入时，不需要，可以不在{ }中定义

// 6、使用export导出的成员，必须严格按照导出时候的名称，来使用{ }按需接收，名字一样，排序不影响结果。

// 7、使用export导出的成员，如果想换个变量名称接收，可以使用as来起别名

// // test.js
// var info = {
//     name: 'zs',
//     age: 20
// }
// export default info
 
// export var title = '小星星'
 
// export 必须直接写在表达式之前，不能和export default一样再加变量名就可以
// export var content = '哈哈哈'

// export default 导出的成员 不能用｛｝。

// import person, {title, content as content1} from './test.js'