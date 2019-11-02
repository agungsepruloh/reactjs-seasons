import React from "react";

const getSeason = (lat, long, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const DisplaySeason = props => {
    const season = getSeason(props.lat, props.long, new Date().getMonth());

    return <div>Season: {season}</div>;
};

export default DisplaySeason;
