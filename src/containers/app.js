import React from "react";
import { connect } from "react-redux";

import CommentsList from "../components/comments-list";
import AddComment from "../components/add-comments";

import { addComment,delComment,inputName,inputText } from "../actions/"

let App = (props) =>{
    const{
        comments,
        nameValue,
        textValue,
        addComment,
        delComment,
        inputName,
        inputText
    } = props;

    return(
        <div>
            <CommentsList comments={comments} delComment={delComment} />
            <AddComment addComment={addComment} inputName={inputName} inputText={inputText} nameValue={nameValue} textValue={textValue} />
        </div>
    )
};

const mapStateToProps = state =>{
    return{
        comments: state.comments,
        nameValue: state.nameValue,
        textValue: state.textValue
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addComment: (name, text) => dispatch(addComment(name,text)),
        delComment: (id) => dispatch(delComment(id)),
        inputName: (value) => dispatch(inputName(value)),
        inputText: (value) => dispatch(inputText(value))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;