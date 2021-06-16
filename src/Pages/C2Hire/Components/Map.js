import React from 'react'

function Map(props) {
    const { location } = props;
    return (
        <div className="col-12">
            <div className="get-direction">
              <span className="directions">Get the Directions</span>
              <span className="emptydirect"></span>
              <div id="googleMap">
                <iframe
                  src={location}
                  style={{ border: "0", width: "100%", height: "498px" }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
    )
}

export default Map
