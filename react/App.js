// { Component } 这种方法可以直接解构出Component，以后可以直接用Component 而不需要再重复写React.component
import React ,{Component} from 'react';
import './App.css';
import NavBar from './components/navBar.js';
import Main from './components/main.js';
import Joke from './components/todo/joke.js';
import Footer from './components/footer.js';
//数据和组件分开管理
import Data from './assets/jokeData.js'
import TodoData from './assets/todoData.js';




//用arry.map方法可以轻松重复创建组件
let todo = ['read a book', 'get some code practice','write a diary','do some sport']
const JokeComponent = Data.map((joke,index) => <Joke joke={joke.joke} punchline={joke.punchline} key={index} /> )

// 不用react Hook 的时候，只有用class类才能使用state
class App extends Component {
  constructor(){
    // super() 继承？ 在 JavaScript 中，super 指的是父类的构造函数。（在我们的示例中，它指向React.Component 的实现。）

// 重要的是，在调用父类构造函数之前，你不能在构造函数中使用this。 JavaScript 是不会让你这样做的：

//这里还不能用 this
    super()
//现在可以用了
//初始化state
    this.state = {
      data: TodoData
    }
    //类里面定义的方法都需要经过这个步骤绑定
    this.handler = this.handler.bind(this)
  }
  handler(id){
    this.setState((prevState) => {
      // 定义改变state的方法
        let changedData = prevState.data.map((item ,index) =>{
          if(item.id === id){
            return {
              // 其他的属性保持不变，只修改completed 
              ...item,
              // 每次Id一样时取反
              completed: !item.completed
            }
          }
          // 这里是map方法中修改完每一项后返回新的内容
          return item
          
        })
        // 这里是返回修改后的全部内容
        return {
          data: changedData
        }
    })
  }
  // class中必须有一个render（）方法？
  render(){
    // 把组件一一挂载到app中 用prons 传参 和方法
      return (
        <div className="App">
          <NavBar navList={["info","about","myInfo","Login"]}/>
            <Main data= {this.state.data} handler= {this.handler}/> 
           {/*<div className= "mainDiv">
                     { JokeComponent }
                  </div >*/}
          <Footer CPR="@CopyRight Carel"/>
        </div>
      );
  }
}

export default App;
