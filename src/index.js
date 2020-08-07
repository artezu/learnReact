import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class Comments extends React.Component{
    constructor(){
      super();
      this.state = {
        nameValue: '',
        textValue:'',
        comment: JSON.parse(localStorage.getItem("comment")) ? JSON.parse(localStorage.getItem("comment")) : []
      };
      this.addComment = this.addComment.bind(this);
      this.delComment = this.delComment.bind(this);
      this.input = this.input.bind(this);
    }
    input(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    delComment(key){
      let allComment = this.state.comment.filter((comment)=> {
        if(comment.id != key)
        return comment;
      });

      localStorage.setItem("comment", JSON.stringify(allComment));
      this.setState({comment: allComment});
    }
    addComment(event){
      event.preventDefault();
      if (this.state.nameValue != "" && this.state.textValue != ""){
        let date = new Date();
        let newComment = {
          id: this.state.comment.length,
          name: this.state.nameValue,
          date: `${date.getHours() < 10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}, ${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}/${date.getMonth() < 9 ? "0"+(date.getDate() + 1) : date.getDate() + 1}/${date.getFullYear()}`,
          text: this.state.textValue
        };
        let allComment = this.state.comment.slice();
        allComment.push(newComment);
        localStorage.setItem("comment", JSON.stringify(allComment));
        this.setState({
          nameValue: "",
          textValue: "",
          comment:allComment
        });
      }
      else{
        alert("Введите имя пользователя и коментарий!")
      }
    }
    render(){
      return(
        <div>
          <ul className="comments">
            {this.state.comment.map((comment) => {
              return <Commentary key={comment.id} name={comment.name} date={comment.date} text={comment.text} delComment={() => this.delComment(comment.id)}/>
            })}
          </ul>
          <form className="add-comment">
            <label htmlFor="userName">Имя пользователя</label>
            <input id="userName" name="nameValue" type="text" value={this.state.nameValue} onChange={this.input}/>
            <label htmlFor="textComment">Комментарий</label>
            <textarea id="textComment" name="textValue" value={this.state.textValue} onChange={this.input}/>
            <input name="userName" type="button" value="добавить комментарий" onClick={this.addComment} />
          </form>
        </div>
      );
    }
}
const Commentary = (props)=>{
  return (
    <li className="comments__item" key={props.id}>
      <span>{props.name} - {props.date}</span>
      <button className="comments__item-del" onClick={props.delComment}>Удалить</button>
      <p><pre>{props.text}</pre></p>
    </li>
  )    
}

ReactDOM.render(
    <Comments />,
  document.getElementById('root')
);