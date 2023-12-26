import React from "react";


export const Jumbotron = ({ title = 'A Warm Welcome!', subtitle = 'Lorem Ipsum', label = 'Call to action!' }) => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p className="col-md-8 fs-4">{subtitle}</p>
                    <button className="btn btn-primary btn-lg" type="button">{label}</button>
                </div>
            </div>
        </div>
    );
};