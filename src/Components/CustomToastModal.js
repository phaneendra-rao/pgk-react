import React, { useEffect } from "react";
import PortalModal from "../Portals/PortalModal";
const $ = window.$;

const CustomToastModal = (props) => {
  useEffect(() => {
    if (props?.show) {
      $("#customToastModal").modal("show");
      $(".modal-backdrop").show();
    } else {
      $("#customToastModal").modal("hide");
      $(".modal-backdrop").hide();
    }
  });

  return (
    props?.show && <PortalModal>
      <div className="modal" id={"customToastModal"} tabIndex={-1}>
        <div
          className={`modal-dialog modal-dialog-centered modal-sm`}
          role="document"
        >
          <div className="modal-content">
            <div className="hiring-modal">
              <button type="button" className="close" onClick={props?.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-success">
                {props?.iconNameClass && (
                  <div className="modal-icon">
                    <i
                      className={`fas ${props?.iconNameClass} txt-lightgreen`}
                    ></i>
                  </div>
                )}
                <p className="modal-success-txt">{props?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalModal>
  );
};

export default CustomToastModal;
