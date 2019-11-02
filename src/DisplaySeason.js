import React from "react";
import "./DisplaySeason.css";

const seasonConfig = {
    winter: {
        text: "Burr, it's chilly!",
        iconName: "snowflake"
    },
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    }
};

const getSeason = (lat, long, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const DisplaySeason = props => {
    const season = getSeason(props.lat, props.long, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`display-season ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default DisplaySeason;
