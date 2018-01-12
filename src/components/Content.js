import React from 'react';
import {Link} from 'react-router-dom';

const Content = (props) => {
    const result = props.data;

    const subString = (strings) => {
        const getString = strings;
        return getString.substr(0,200)+"...";
    }


    return(
        result.map(content =>
            <div className="col-md-4 mb-4" key={content.id}>
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">{content.title} ({content.release_date})</h2>
                        <p className="card-text">{subString(content.description)}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={"details/"+content.id} className="btn btn-primary">More Info</Link>
                    </div>
                </div>
            </div>
        )

    );
};
export default Content;