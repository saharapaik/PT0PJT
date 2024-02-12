// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import './App.css';
import api from './api';
import PostView from './PostView'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      results: [],
    }
  }

  componentDidMount(){
    this.getPosts()
  }

  async getPosts(){
    const _results = await api.getAllPosts()
    //_results.data에는 아무 데이터가 없다. -> 비동기
    this.setState({results: _results.data})
    console.log(_results)
  }

  handlingChange = (event)=> {
    this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault() //event의 기능 -> 막는다
    let result = await api.createPost({title: this.state.title, content: this.state.content})
    console.log("완료! "+ result)
    this.setState({title: '', content: ''})
    this.getPosts()
  }
  handlingDelete = async (event) => {
    await api.deletePost(event.target.value)
    this.getPosts()
  }


  render(){
  return (
    <div className="App">
      <div className="PostingSection">
        <h2>대나무 숲 작성하기</h2>
        <form onSubmit={this.handlingSubmit}>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handlingChange}
        />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handlingChange}
        />
        <button type ="submit">제출하기</button>
        </form>
      </div>

      <div className="ViewSection">
        {
          this.state.results.map((post) =>
          <div>
            <PostView key = {post.id} id = {post.id} title = {post.title} content = {post.content}/>
            <button value = {post.id} onClick={this.handlingDelete}>삭제하기</button>
          </div>
          )
        }
      </div>
    </div>
  );
  }
}

export default App;

