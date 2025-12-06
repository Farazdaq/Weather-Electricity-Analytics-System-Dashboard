import "./Profile.css";
import theme from "../../assets/styles/theme";

function Profile() {
  return (
    <div className="profile-container">
      <img
        src="https://picsum.photos/200/300"
        alt="Profile Image"
        className="profile-image"
      />
    </div>
  );
}

export default Profile;
