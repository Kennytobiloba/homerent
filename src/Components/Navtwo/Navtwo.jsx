import React from 'react'
import "../Navtwo/Navtwo.css"
import { Link } from 'react-router-dom';
 const Navtwo = () => {
  return (
    <div> 
      <div className="new-redesign-item" />
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="icsharp-bedroom-parent-parent">
            <img
              className="icsharp-bedroom-parent "
              alt=""
              src="/icsharpbedroomparent.svg"
            />
            <div className="rent"> <Link to="/rent">Rent</Link></div>
          </div>
          <div className="icsharp-bedroom-parent-parent  ">
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <div className="rent">  <Link to="/buy">Buy</Link> </div>
          </div>
          <div className="icsharp-bedroom-parent-parent">
            <img className="vector-icon3" alt="" src="/vector3.svg" />
            <div className="rent"> <Link to="/sell">Sell</Link></div>
          </div>
          <div className="icsharp-bedroom-parent-parent  review">
            <img className="vector-icon4" alt="" src="/vector4.svg" />
            <div className="rent review">Review</div>
          </div>
          <div className="icsharp-bedroom-parent-parent">
            <img className="vector-icon5" alt="" src="/vector5.svg" />
            <div className="rent">Pricing</div>
          </div>
          <div className="icsharp-bedroom-parent-parent  review">
            <img className="vector-icon6" alt="" src="/vector6.svg" />
            <div className="rent">Blog</div>
          </div>
        </div>
        <div className="frame-parent2 review">
          <div className="vector-parent5">
            <img className="line-icon" alt="" src="/line-1.svg" />
            <img className="frame-child1" alt="" src="/line-3.svg" />
          </div>
          <div className="filter">Filter</div>
        </div>
      </div>
    </div>
  )
}
export default Navtwo