import React from "react";

const CommentsList = (props) =>{
    const { comments,delComment } = props;
    //const comments = this.props.comments;
    return(
        <ul className="comments">
            {comments.map(comment => {
                return(
                    <li className="comments__item" key={comment.id}>
                        <span>{comment.name} - {comment.date}</span>
                        <button className="comments__item-del" onClick={ev => delComment(comment.id)}>Удалить</button>
                        <p>{comment.text}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default CommentsList;
