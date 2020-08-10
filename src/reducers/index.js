import { combineReducers } from 'redux';
const { INPUT_TEXT, INPUT_NAME, DEL_COMMENT, ADD_COMMENT } = require("../actions");

const comments = (state = [], action) =>{

    switch(action.type){
        case ADD_COMMENT:
            let date = new Date();
            let newId = 0;
            if(state.length) newId = state[state.length - 1].id + 1;
            else newId = 1;
            let out =[...state,
                {
                    id: newId,
                    name: action.name,
                    text: action.text,
                    date: `${date.getHours() < 10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}, ${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}/${date.getMonth() < 9 ? "0"+(date.getDate() + 1) : date.getDate() + 1}/${date.getFullYear()}`
                }
            ];
            localStorage.setItem("comments", JSON.stringify(out));
            return out;
        case DEL_COMMENT:
            let dout = state.filter(comment =>{
                if(comment.id != action.id)
                    return comment;
            });
            localStorage.setItem("comments", JSON.stringify(dout));
            return dout; 
        default: 
            return state;
    }
}
const textValue = (state = "", action) =>{
    switch(action.type){
        case INPUT_TEXT:
            return action.textValue;
        default: 
            return state;
    }
}
const nameValue = (state = "", action) =>{
    switch(action.type){
        case INPUT_NAME:
            return action.nameValue;
        default: 
            return state;
    }
}
// nameValue: state.nameValue,
// textValue: state.textValue,
// comments:
export const allReducer = combineReducers({
    comments,
    nameValue,
    textValue
})