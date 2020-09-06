import React from "react";
import "./SeasonDisplay.css";

const GetSeason = (lat, mount) => {
  if (mount > 2 && mount < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonConfig = {
  summer: {
    text: "so Hot ,lets go to the beach",
    iconName: "sun",
    color: "orange",
  },
  winter: {
    text: "wow its frezzing ,so cold",
    iconName: "snowflake",
    color: "blue",
  },
};

const SeasonDisplay = (props) => {
  console.log(props);

  const season = GetSeason(props.lat, new Date().getMonth());
  const { text, iconName, color } = SeasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${color} massive ${iconName} loading icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${color} massive ${iconName} loading icon`} />
    </div>
  );
};

export default SeasonDisplay;
