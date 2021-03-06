import React from "react";
import { Link } from "react-router-dom";

const perfume = props => (
  <div style={{ marginBottom: "40px" }}>
    <h3 className="card-header bg-dark text-white">
      {props.perfume.name.toLocaleUpperCase()}
    </h3>
    <div className="card-body text-black row">
      <div className="col-md-4">
        <h5 className="card-title">{props.perfume.role.toLocaleUpperCase()}</h5>
      </div>
      <div className="col-md-4" />
      <div className="col-md-4">
        <Link
          to={"/product/" + props.perfume.id}
          className="btn btn-outline-dark float-right clearfix"
        >
          View more
        </Link>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={props.perfume.imageUrl}
            alt="perfume"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="col-md-6">
          <p className="card-text text-black">{props.perfume.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default perfume;
