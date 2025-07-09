// src/components/Profile.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading profile...</div>;

  if (!isAuthenticated) return <div>Please log in</div>;

  return (
    <div>
      <img src={user?.picture} alt={user?.name} style={{ width: 50, borderRadius: "50%" }} />
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
