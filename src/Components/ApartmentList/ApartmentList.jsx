import React from 'react'
import { Link } from 'react-router-dom'
import "../ApartmentList/ApartmentList.css"
 const ApartmentList = () => {
  return (
    <div>
        <div className="land-lord-registration-one">
      <div className="vector-parent-one" >
        <img className="group-child-one" alt="" src="/vector-79.svg" />
        <b className="house-one">
          <span>H</span>
          <span className="ou-one">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-one">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-one"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="what-type-of-one">
        What type of Apartment do you want to list?
      </b>
      <div className="back-wrapper-one">
        <div className="back-one"><Link to="/agent">Back</Link></div>
      </div>
      <div className="next-wrapper-one">
        <div className="next-one"><Link to="/LandlordRegristration">Next</Link></div>
      </div>
      <div className="vector-group-one">
        <img className="vector-icon-one" alt="" src="/vector.svg" />
        <div className="a-storey-building-one">A storey Building</div>
        <div className="frame-child-one" />
      </div>
      <div className="vector-container-one">
        <img className="vector-icon1-one" alt="" src="/vector1.svg" />
        <div className="a-bedroom-flat-one">A Bedroom flat</div>
        <div className="frame-child-one" />
      </div>
      <div className="frame-div-one">
        <img className="vector-icon2-one" alt="" src="/vector2.svg" />
        <div className="bungalow-one">Bungalow</div>
        <div className="frame-child-one" />
      </div>
      <div className="vector-parent1-one">
        <img className="vector-icon1-one" alt="" src="/vector3.svg" />
        <div className="mansion-one">Mansion</div>
        <div className="frame-child-one" />
      </div>
    </div>
    </div>
  )
}
export default ApartmentList


