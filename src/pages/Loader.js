import React from "react";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <>
      <ReactLoading
        type="spinningBubbles"
        color="var(--clr-primary-2)"
        height={"20%"}
        width={"20%"}
        className="loading"
      />
    </>
  );
}

export default Loader;
