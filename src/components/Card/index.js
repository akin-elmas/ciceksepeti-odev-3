import { useState, useEffect } from "react";
import UserCard from "../UserCard";
function Card() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        userData = await response.json();
      } catch (error) {
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  const deleteCard = (index) => {
    const filteredUsers = users.filter((user) => user.id !== index);
    setUsers(filteredUsers);
    alert("Silindi...");
  };

  return (
    <div>
      <input
        className="search-box"
        onInput={filterCards}
        placeholder="Search..."
      />
      <div className="cards-container">
        {users.map((user) => (
          <UserCard key={user.id} userData={user} deleteCard={deleteCard} />
        ))}
      </div>
    </div>
  );
}

export default Card;
