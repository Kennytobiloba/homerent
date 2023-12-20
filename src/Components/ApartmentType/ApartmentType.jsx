import React from 'react'
import "../ApartmentType/ApartmentType.css"
import { Link } from 'react-router-dom'
const ApartmentType = () => {
  return (
    <div>
<div className="land-lord-registration-type">
      <div className="vector-parent-type" >
        <img className="group-child-type" alt="" src="/vector-79.svg" />
        <b className="house-type">
          <span>H</span>
          <span className="ou-type">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-type">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-type"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      
      <b className="how-many-rooms-type">How many rooms are in the apartment?</b>
      <div className="frame-parent-type">
        <div className="parent-type">
          <div className="div-type">1</div>
          <img className="frame-child-type" alt="" src="/vector-9.svg" />
        </div>
        <img className="vector-icon-type" alt="" src="/vector.svg" />
      </div>
      <div className="frame-group-type">
        <div className="back-wrapper-type">
          <div className="back-type"><Link to="/LandlordRegristration">Back</Link></div>
        </div>
        <div className="next-wrapper-type" >
          <div className="next-type"><Link to="/Location">Next</Link></div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ApartmentType




