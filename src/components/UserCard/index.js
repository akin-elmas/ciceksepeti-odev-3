import "./index.css";
import Location from "../Location";
import Button from "../../Button";
const UserCard = ({ userData, deleteCard }) => {
  const handleDelete = (index) => {
    deleteCard(index);
  };
  return (
    <div className="card">
      <div className="card__title">{userData.name}</div>
      <div className="card__body">
        <Location location={userData} />
      </div>
      <button className="btn" onClick={() => handleDelete(userData.id)}>
        Delete
      </button>
      <Button userData={userData} />
    </div>
  );
};

export default UserCard;
