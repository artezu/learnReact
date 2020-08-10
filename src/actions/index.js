export const ADD_COMMENT = "ADD_COMMENT";
export const DEL_COMMENT = "DEL_COMMENT";
export const INPUT_NAME = "INPUT_NAME";
export const INPUT_TEXT = "INPUT_TEXT";

export const addComment = (name, text) => {
    return {
        type: ADD_COMMENT,
        name,
        text
    }
};
export const delComment = (id) =>{
    return{
        type: DEL_COMMENT,
        id
    }
}
export const inputName = (value) =>{
    return{
        type : INPUT_NAME,
        nameValue : value
    }
}
export const inputText = (value) =>{
    return{
        type : INPUT_TEXT,
        textValue : value
    }
}