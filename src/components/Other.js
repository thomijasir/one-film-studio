import React from 'react';

const Footer = (props) => {
    const result = props.data;

    return(

        result.slice(0, 6).map(responds =>
                <div className="col-lg-4 other-card" key={responds.id}>
                    <div className="card">
                        <div className="card-header">
                            <a href={responds.id}>{responds.title} ({responds.release_date})</a>
                        </div>
                        <div className="card-block paddingt-card">
                                {responds.description.substr(0,100)}...
                        </div>
                    </div>
                </div>
        )
    );
};

export default Footer;