import React, { useState, useEffect } from "react";

const DisplayImageWithName = ({ title, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img
        style={{
          maxWidth: "400px",
          width: "100%",
        }}
        src={image}
      />
    </div>
  );
};

export default DisplayImageWithName;
