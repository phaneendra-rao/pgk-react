import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTokensAction } from '../../Store/Actions/DashboardActions/DashboardAction';
const $ = window.$;

const DashboardHeader = () => {
  const balance = useSelector(state => state.DashboardReducer.balance);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(GetTokensAction());
  }, [])

  return (
    <div className="topbar">
      <i className="fas fa-bars hamburger" id="menu-bar"></i>
      <p className="date">Wednesday, 10th Febraury 2021</p>
      <div className="input-group search">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle points-btn"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-offset="0,10"
        >
          <p className="btn-label">Available Tokens</p>
          <p className="points">{balance?.balance}</p>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="points-container">
            <div className="credits-container">
              <p className="label-head">Available Tokens</p>
              <p className="label-body">{balance?.balance}</p>
              <div className="credits-body">
                <table className="credits-table">
                  <tbody>
                    <tr className="t-row">
                      <td className="t-label">Bonus Credits</td>
                      <td className="t-value">50</td>
                    </tr>
                    <tr className="t-row">
                      <td className="t-label">Purchased Credits</td>
                      <td className="t-value">112</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="add-credits-container"
              data-toggle="modal"
              data-target="#balance"
            >
              <i className="fas fa-plus-circle" />
              <p className="label">Add Tokens</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-avatar-container">
        <p className="profile-name">Shalmali</p>
        <div className="profile-avatar">
          <i className="fas fa-user" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
