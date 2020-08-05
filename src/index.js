import React from 'react'
import ReactDom from 'react-dom'



// class Coments extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             coment:[
//                 {
//                     id: 1,
//                     name: "test",
//                     date: Date(),
//                     text:"Пробный комментарий"
//                 }
//             ]
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <ul className="coments">
//                     this.state.coment.map((coment) => {
//                         //<Comentary key={coment.id} name={coment.name} date={coment.date} text={coment.text}/>
//                         <li className="coments__item" key={coment.id}>
//                             <span>{coment.name} + "/" + {coment.date}</span>
//                             <p>{coment.text}</p>
//                         </li>
//                     })
//                 </ul>
//             </div>
//         );
//     }
// }


// ReactDOM.render(
//     <Coments />,
//   document.getElementById('root')
// );

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Эта привязка обязательна для работы `this` в колбэке.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );