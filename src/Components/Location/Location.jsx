import React from 'react'
import "../Location/Location.css"
import { Link } from 'react-router-dom'
const Location = () => {
  return (

    <div>
<div className="land-lord-registration-location">
      <div className="vector-parent-location" >
        <img className="group-child-location" alt="" src="/vector-79.svg" />
        <b className="house-location">
          <span>H</span>
          <span className="ou-location">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-location">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-location"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="where-is-the-location">Where is the place located?</b>
      <div className="land-lord-registration-inner-location">
        <div className="vector-group-location">
          <img className="vector-icon-location" alt="" src="/vector.svg" />
          <div className="enter-your-adress-location">Enter Your Adress</div>
        </div>
      </div>
      <b className="how-many-toilets-location">How many toilets are in the apartment?</b>
      <div className="frame-parent-location">
        <div className="frame-group-location">
          <div className="countryregion-parent-location">
            <div className="countryregion-location">Country/Region</div>
            <img className="frame-child-location" alt="" src="/vector-9.svg" />
          </div>
          <div className="countryregion-parent-location">
            <div className="countryregion-location">Address Line 1</div>
          </div>
        </div>
        <div className="frame-group">
          <div className="countryregion-parent">
            <div className="countryregion-location">Address Line 2 (If Applicable)</div>
          </div>
          <div className="countryregion-parent">
            <div className="countryregion-location">{`City/ Village `}</div>
          </div>
        </div>
        <div className="frame-group-location">
          <div className="countryregion-parent-location">
            <div className="countryregion-location">State/ Province / Territory</div>
          </div>
          <div className="countryregion-parent-location">
            <div className="countryregion-location">Postal code (If Applicable)</div>
          </div>
        </div>
      </div>
      <div className="frame-parent1-location">
        <div className="back-wrapper-location" >
          <div className="back-location"><Link to="/ApartmentType">Back</Link></div>
        </div>
        <div className="next-wrapper-location" >
          <div className="next-location"><Link to="/Toilet">Next</Link></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Location



