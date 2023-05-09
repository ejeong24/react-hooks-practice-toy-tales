import React from "react";

function ToyCard() {
  return (
    <div className="card">
      <h2>{ toy.name }</h2>
      <img
        src={ toy.image}
        alt={"" /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{"" /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
