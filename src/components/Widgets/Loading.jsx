import React from "react";
import "./Loading.css";
import pageLoader from "../../images/page-loader.gif"

function Loading() {
  console.log("I'm loading!!!");
  return (
    <div className="pageloader">
      <img src={pageLoader} alt="Loading..."/>
    </div>
    // <p>Loading...</p>
  );
}

export default Loading;