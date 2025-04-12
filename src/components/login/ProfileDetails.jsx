// ProfileDetails.jsx
import React from "react";
import jwt_decode from "jwt-decode"; // Default import from jwt-decode@3.1.2

function ProfileDetails() {
  const token = localStorage.getItem("token");
  let userEmail = "N/A";

  if (token) {
    try {
      // Decode the token and get the email from payload
      const decoded = jwt_decode(token);
      userEmail = decoded.email ? decoded.email : "N/A";
    } catch (error) {
      console.error("Token decode error:", error);
    }
  }

  return (
    <div>
      <h2>Profile Details</h2>
      <p>
        <strong>Email:</strong> {userEmail}
      </p>
      {/* Additional profile fields or editing functionality */}
    </div>
  );
}

export default ProfileDetails;
