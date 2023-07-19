import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

const listcolors = colors.map((onecolor) =>{
  return <li key={onecolor} style={{ color: onecolor }}>{onecolor}</li>
})

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
          {listcolors} 
      </ol>
    </div>
  );
}

export default ColorList;
