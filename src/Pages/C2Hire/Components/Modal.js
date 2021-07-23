import React from "react";

function Modal(props) {
  console.log("hi, in modal", props);
  const { data = {} } = props;
  return (
    <>
      <div className="modal fade team-modal" id={`member${data.id}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img className={data.name} src={data.imageUrl} alt="" />
                  </div>
                  <div className="title">
                    <span>{data.name}</span>
                    <span>{data.designation}</span>
                  </div>
                </div>
                {data.descriptionParagraphs &&
                  data.descriptionParagraphs.length &&
                  data.descriptionParagraphs.map((para) => <p>{para}</p>)}
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
              <span className="linkedin">
                  <a href={data.linkedinUrl} target="_blank">
                    <img
                      height="40px"
                      src="../../../images/c2hire/icon/linkedin.png"
                      alt=""
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
