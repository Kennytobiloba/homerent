import React from 'react'
import "../LandlordRegristration/LandlordRegristration.css"
import { Link } from 'react-router-dom'
const LandlordRegristration = () => {
  return (
    <div>
       <div className="land-lord-registration-reg">
      <div className="vector-parent-reg">
        <img className="group-child-reg" alt="" src="/vector-79.svg" />
        <b className="house-reg">
          <span>H</span>
          <span className="ou-reg">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-reg">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-reg"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <img
        className="httpslottiefilescomanimat-icon-reg"
        alt=""
        src="/httpslottiefilescomanimationsapartmentanimatedicon4mldwlngcn@2x.png"
      />
      <div className="step-1-parent-reg">
        <b className="step-1-reg">Step 1</b>
        <b className="tell-us-about">Tell us about your place</b>
        <div className="in-this-step-reg">
          In this step, we'll ask you which type of property you have
        </div>
      </div>
      <div className="back-wrapper-reg" >
        <div className="back-reg" ><Link to="/apartment">Back</Link></div>
      </div>
      <div className="next-wrapper-reg" >
        <div className="next-reg"><Link to="/ApartmentType">Next</Link></div>
      </div>
    </div>
    </div>
  )
}

export default LandlordRegristration







