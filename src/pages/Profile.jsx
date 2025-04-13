// src/pages/Profile.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-md-3">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">My Account</h5>
            </div>
            <div className="list-group list-group-flush">
              <NavLink
                to="/profile/details"
                className={({ isActive }) =>
                  isActive
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
              >
                Profile Details
              </NavLink>
              <NavLink
                to="/profile/orders"
                className={({ isActive }) =>
                  isActive
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
              >
                Order History
              </NavLink>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
