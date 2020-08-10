import React from 'react'

const AddComment = (props) =>{
     const {addComment, inputName, inputText, nameValue, textValue} = props
    return(
        <form className="add-comment">
            <label htmlFor="userName">Имя пользователя</label>
            <input id="userName" name="nameValue" type="text" value={props.nameValue} onChange={(ev) => {
                inputName(ev.target.value);
            }}/>
            <label htmlFor="textComment">Комментарий</label>
            <textarea id="textComment" name="textValue" value={props.textValue} onChange={(ev) => {
                inputText(ev.target.value);
            }}/>
            <input name="userName" type="button" value="добавить комментарий" onClick={() => {
                addComment(nameValue, textValue);
                inputText("");
                inputName("");
            }} />
        </form>
    );
}

export default AddComment;