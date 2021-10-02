import React from "react";

function index(userData) {
  console.log(userData);
  return (
    <div className="location">
      <p>Username: {userData.location.username}</p>
      <p>Email: {userData.location.email}</p>
      <p>ZipCode: {userData.location.address.zipcode}</p>
    </div>
  );
}

export default index;
