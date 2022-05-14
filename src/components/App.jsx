import React from "react";
import { contacts } from "../contacts";

const Card = ({ name, src, phoneNum, email }) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="card-h2">{name}</h2>
        <img src={src} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{phoneNum}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((item) => (
        <Card
          name={item.name}
          src={item.imgURL}
          phoneNum={item.phone}
          email={item.email}
        />
      ))}
    </div>
  );
}

export default App;
