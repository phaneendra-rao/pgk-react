import React, { useEffect } from "react";
import PortalModal from "../Portals/PortalModal";
const $ = window.$;

const CustomModal = (props) => {
  useEffect(() => {
    if (props?.show) {
      $("#customModal").modal("show");
      $(".modal-backdrop").show();
    } else {
      $("#customModal").modal("hide");
      $(".modal-backdrop").hide();
    }
  });

  return (
    props?.show && (
      <PortalModal>
        <div className="modal" id={"customModal"} tabIndex={-1}>
          <div
            className={`modal-dialog modal-lg modal-dialog-centered`}
            role="document"
            style={{...props?.modalStyles}}
          >
            <div className="modal-content">{props?.children}</div>
          </div>
        </div>
      </PortalModal>
    )
  );
};

export default CustomModal;
