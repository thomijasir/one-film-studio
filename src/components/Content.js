import React from 'react';

const Content = (props) => {
    const result = props.data;
    /*let datacontent = result.map(content =>

        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title">{content.title} ({content.release_date})</h2>
                    <p className="card-text">{content.description}</p>
                </div>
                <div className="card-footer">
                    <a href={"details/"+content.id} className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
    );*/

    function subString(strings) {
        const getString = strings;
        return getString.substr(0,200)+"...";
    }


    return(
        result.map(content =>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">{content.title} ({content.release_date})</h2>
                        <p className="card-text">{subString(content.description)}</p>
                    </div>
                    <div className="card-footer">
                        <a href={"details/"+content.id} className="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>
        )

    );
};
export default Content;