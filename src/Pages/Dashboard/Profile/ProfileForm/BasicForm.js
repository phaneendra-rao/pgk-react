import React from "react";

const BasicForm = () => {
  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Basic</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="d-grp">
              <input
                type="text"
                name=""
                className="d-inp"
                placeholder="Stakeholder ID"
                required
              />
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
              <input
                type="text"
                name=""
                className="d-inp"
                placeholder="Organization Registration ID / CIN *"
                required
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
              <select name="" className="d-inp" required>
                <option value="">Corporate Sector *</option>
                <option value="">Program</option>
                <option value="">Program</option>
              </select>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
              <select name="" className="d-inp" required>
                <option value="">Corporate Category *</option>
                <option value="">Program</option>
                <option value="">Program</option>
              </select>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
              <select name="" className="d-inp" required>
                <option value="">Industry Vertical *</option>
                <option value="">Program</option>
                <option value="">Program</option>
              </select>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
              <input
                type="date"
                name=""
                className="d-inp"
                title="Date of Commencement"
                placeholder="Date of Commencement"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
