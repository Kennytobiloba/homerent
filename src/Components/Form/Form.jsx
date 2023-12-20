import React from 'react'
import "../Form/Form.css"
import { Link } from 'react-router-dom'
const Form = () => {
  return (
    <div>
<div className="land-lord-registration-form">
      <div className="vector-parent-form" >
        <img className="group-child-form" alt="" src="/vector-79.svg" />
        <b className="house-form">
          <span>H</span>
          <span className="ou-form">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-form">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-form"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="where-is-the-form-form">Where is the place located?</b>
      <div className="frame-parent-form">
        <div className="frame-group-form">
          <div className="countryregion-parent-form">
            <div className="countryregion-form">Country/Region</div>
            <img className="frame-child-form" alt="" src="/vector-9.svg" />
          </div>
          <div className="countryregion-parent-form">
            <div className="countryregion-form">Address Line 1</div>
          </div>
        </div>
        <div className="frame-group-form">
          <div className="countryregion-parent-form">
            <div className="countryregion-form">Address Line 2 (If Applicable)</div>
          </div>
          <div className="countryregion-parent-form">
            <div className="countryregion-form">{`City/ Village `}</div>
          </div>
        </div>
        <div className="frame-group-form">
          <div className="countryregion-parent-form">
            <div className="countryregion-form">State/ Province / Territory</div>
          </div>
          <div className="countryregion-parent-form">
            <div className="countryregion-form">Postal code (If Applicable)</div>
          </div>
        </div>
      </div>
      <b className="how-many-toilets-form">How many toilets are in the apartment?</b>
      <div className="frame-parent1-form">
        <div className="back-wrapper-form" >
          <div className="back-form"><Link to="/Toilet">Back</Link></div>
        </div>
        <div className="next-wrapper-form" >
          <div className="next-form"><Link to="/Offers">Next</Link></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form



