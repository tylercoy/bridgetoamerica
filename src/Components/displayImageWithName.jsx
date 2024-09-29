import React from "react";

const DisplayImageWithName = ({ image }) => {
  return (
    <div style={{ textAlign: "center", width: "100%", overflow: "hidden" }}>
      <img
        style={{
          maxWidth: "60vw", // Limit width to 80% of the viewport width
          height: "auto", // Maintain aspect ratio
          objectFit: "cover", // Ensure the image covers the container
        }}
        src={image}
        alt="Description of the image" // Add alt text for accessibility
      />
    </div>
  );
};

export default DisplayImageWithNames;
