import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="loading">
      <Loader
        type="Puff"
        color="#342791"
        height={100}
        width={100}
        timeout={30000}
      ></Loader>
    </div>
  );
}

export default Loading;
