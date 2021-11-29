import React from "react";
import ProtoTypes from "prop-types";

function Movie({ id, title, year, summary, poster}) {
    return <h4>{title}</h4>;
}

Movie.prototype = { 
    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired,
};

export default Movie;