// { Component } Ҫ����д ��Ϊ���϶�����export + ���ʽ ������
import React ,  { Component } from 'react';
import { render } from 'react-dom';


// export + ���ʽ ������ ����export + �Ѿ�����õı����� ���������

//  class ���д�� ��һ�����и�������ֵ�� render����
 export class Note extends Component {
	render () {	
		// ������render������ֱ�ӻ�ȡ��props����
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


// function �����д����Ҳ���Ժ����ڶ����Լ��ķ���
export function Foo (props) {

	function handler(){
		console.log("something happened!")
	}
	return(
		// �����handler��Ҫ��������ֱ�ӵ���
		<div onClick = { handler } >welcome to my place! {props.user } </div>
		)
}



// import  NewNote , { Foo ,Note as NoteBook  } from '../newproject/index.js';
// import ��ʱ�� export default ������Ҫд�ڣ����� ��
// ʹ��export�����ĳ�Ա�������ϸ��յ���ʱ������ƣ���ʹ��{ }������գ�����һ��������Ӱ������


// 1��export default ���Ⱪ¶�ĳ�Ա������ʹ���������������

// 2����һ��ģ���У�export default ֻ�������Ⱪ¶һ��

// 3����һ��ģ���У�����ͬʱʹ��export default ��export ���Ⱪ¶��Ա

// 4��ʹ��export���Ⱪ¶�ĳ�Ա��ֻ��ʹ��{ }����ʽ�����գ�������ʽ�����������赼����

// 5��export�������Ⱪ¶�����Ա��ͬʱ�����ĳЩ��Ա����import����ʱ������Ҫ�����Բ���{ }�ж���

// 6��ʹ��export�����ĳ�Ա�������ϸ��յ���ʱ������ƣ���ʹ��{ }������գ�����һ��������Ӱ������

// 7��ʹ��export�����ĳ�Ա������뻻���������ƽ��գ�����ʹ��as�������

// // test.js
// var info = {
//     name: 'zs',
//     age: 20
// }
// export default info
 
// export var title = 'С����'
 
// export ����ֱ��д�ڱ��ʽ֮ǰ�����ܺ�export defaultһ���ټӱ������Ϳ���
// export var content = '������'

// export default �����ĳ�Ա �����ã�����

// import person, {title, content as content1} from './test.js'