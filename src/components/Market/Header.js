import React from "react";

const Header = () => {
  const market = -1;
  const label = () => {
    if (market > 0) {
      return "up";
    } else return "down";
  };
  const color = () => {
    if (market > 0) {
      return "green";
    } else return "red";
  };

  return (
    <>
      <div>
        <span style={{ marginLeft: "1rem" }}>Market is {label()} </span>
        <span>in the past 24 hours</span>
      </div>
      <form style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <select id="currency" name="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </form>
    </>
  );
};

export default Header;

