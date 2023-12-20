import React from 'react'
import "../Offers/offers.css"
import { Link } from 'react-router-dom'
const Offers = () => {
  return (
    <div>


<div className="land-lord-registration-offers">
      <div className="vector-parent-offers" >
        <img className="group-child-offers" alt="" src="/vector-79.svg" />
        <b className="house-offers">
          <span>H</span>
          <span className="ou-offers">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-offers">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-offers"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="tell-your-tenants-offers">
        Tell your tenants what the apartment offers
      </b>
     
      <div className="frame-parent-offers">
        <div className="rectangle-parent-offers">
          <div className="frame-child-offers" />
          <div className="spacious-bedroom-offers">Spacious bedroom</div>
          <div className="frame-item-offers" />
          <img className="vector-icon-offers" alt="" src="/vector.svg" />
        </div>
        <div className="rectangle-group-offers">
          <div className="frame-inner-offers" />
          <div className="standard-built-gym-offers">Standard built gym house</div>
          <img className="vector-icon1-offers" alt="" src="/vector1.svg" />
        </div>
        <div className="rectangle-parent-offers">
          <div className="frame-inner-offers" />
          <img className="vector-icon1-offers" alt="" src="/vector2.svg" />
          <div className="a-bedroom-flat-offers">A Bedroom flat</div>
        </div>
        <div className="vector-group-offers" >
          <img className="vector-icon1-offers" alt="" src="/vector3.svg" />
          <div className="a-bedroom-flat-offers">A Bedroom flat</div>
          <div className="frame-item-offers" />
        </div>
      </div>
      <div className="frame-group-offers">
        <div className="rectangle-parent-offers">
          <div className="spacious-living-room-offers">Spacious living room</div>
          <div className="frame-item-offers" />
          <img className="vector-icon4-offers" alt="" src="/vector4.svg" />
        </div>
        <div className="rectangle-parent-offers">
          <div className="security-post-offers">Security Post</div>
          <div className="frame-item-offers" />
          <img className="group-icon-offers" alt="" src="/group.svg" />
        </div>
        <div className="rectangle-parent-offers">
          <div className="car-park-facility-offers">Car park facility</div>
          <div className="frame-item-offers" />
          <img className="vector-icon5-offers" alt="" src="/vector5.svg" />
        </div>
        <div className="rectangle-parent-offers">
          <div className="private-lounge-offers">Private lounge</div>
          <div className="frame-item-offers" />
          <img className="add-round-light-icon-offers" alt="" src="/vector6.svg" />
        </div>
      </div>
      <div className="frame-container-offers">
        <div className="rectangle-parent-offers">
          <div className="solar-roofing-sheet-offers">24/7 solar roofing sheet</div>
          <div className="frame-item-offers" />
          <img className="vector-icon7-offers" alt="" src="/vector7.svg" />
        </div>
        <div className="add-more-parent-offers">
          <div className="add-more-offers">Add more</div>
          <div className="frame-item-offers" />
          <img
            className="add-round-light-icon-offers"
            alt=""
            src="/add-round-light.svg"
          />
        </div>
      </div>
      <div className="frame-div-offers">
        <div className="back-wrapper-offers" >
          <div className="back-offers"><Link to="/Form">Back</Link></div>
        </div>
        <div className="next-wrapper-offers" >
          <div className="next-offers"><Link to="/Price">Next</Link></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Offers




