import React from 'react'

const Post = (props) =>{

    //const result = props.passing;

   /* var idpost = props.data.id.map(function(datas){
        return datas.id;
    });
    console.log(idpost);*/
    console.log("Titles ",props.title.id);
    return (
        <div className="card paddingt-card">
            <div className="card-block">
                <h4 className="card-title">{props.title.title} ({props.title.release_date})</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                    <ul>
                        <li>Director: {props.title.director} </li>
                        <li>Producer: {props.title.producer} </li>
                        <li>Rating: {props.title.rt_score}</li>
                    </ul>
                </h6>
                <br/>
                <p className="card-text">{props.title.description}</p>
            </div>
        </div>

    );
}

export default Post;