import React from "react";
import { ReactComponent as SvgHead } from "../../sass/svg/head.svg";
//style=head.scss

function Head() {
  return (
    <div className="head">
      <SvgHead />
      <h1>100 days of coding challenge</h1>
    </div>
  );
}

export default Head;
