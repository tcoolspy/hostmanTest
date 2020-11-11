import React from 'react';

const PlaceHolderUser = (props) => {
    return (
        <>
            <div className="card" style={{ marginBottom: '5px'}}>
                <div className="card-content">
                    <p className="title">
                        {props.name}
                    </p>
                    <p className="subtitle">
                        {props.email}
                    </p>
                </div>
            </div>
        </>
    )
};

export default PlaceHolderUser;
