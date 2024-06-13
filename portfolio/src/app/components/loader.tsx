import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-50">
      <div className="loader">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </div>
  );
}

export default Loader;
