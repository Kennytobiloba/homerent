import React from 'react'
import "../Toliet/Toliet.css"
import { Link } from 'react-router-dom'
const Toliet = () => {
  return (
    <div>


<div className="land-lord-registration-toilet">
      <div className="vector-parent-toilet" >
        <img className="group-child-toilet" alt="" src="/vector-79.svg" />
        <b className="house-toilet">
          <span>H</span>
          <span className="ou-toilet">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-toilet">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-toilet"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="how-many-toilets-toilet">How many toilets are in the apartment?</b>
      <div className="frame-parent-toilet">
        <div className="parent-toilet">
          <div className="div-toilet">1</div>
          <img className="frame-child-toilet" alt="" src="/vector-9.svg" />
        </div>
        <img className="vector-icon-toilet" alt="" src="/vector.svg" />
      </div>
      <b className="where-is-the-toilet">Where is the place located?</b>
      <div className="frame-group-toilet">
        <div className="back-wrapper-toilet" >
          <div className="back-toilet"><Link to="/Location">Back</Link></div>
        </div>
        <div className="next-wrapper-toilet" >
          <div className="next-toilet"><Link to="/Form">Next</Link></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Toliet



