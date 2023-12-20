import React from 'react'
import "../DisplayHome/DisplayHome.css"
 const DisplayHome = (props) => {
  return (
   <div>
     <div>
      <div className="group-parent1">
        <div className="grid-item">
          <div className="group-div">
            <div className="frame-parent6">
              <div className="frame-parent7">
                <div className="vector-parent7">
                  <img className="vector-icon7" alt="" src="/vector7.svg" />
                  <div className="lagosisland-nigeria">{props. location}</div>
                </div>
                <div className="frame-parent8">
                  <div className="group-parent2">
                    <div className="n-parent">
                      <div className="n">N</div>
                      <div className="group-item" />
                      <div className="group-inner" />
                    </div>
                    <div className="div">{props.price}</div>
                  </div>
                  <div className="anually">{props.year}</div>
                </div>
              </div>
              <div className="monday-25th-sept">{props.date}</div>
            </div>
            <div className="frame-wrapper1">
              <div
                className="mr-james-alaka-landlord-parent"
                style={{
                  backgroundImage: `url(${props.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="mr-james-alaka-container">
                  <span className="mr-james-alaka">{props.landlordNName}</span>
                  <span className="landlord">Landlord</span>
                </div>
                <img className="ellipse-icon" alt="" src={props.iconone} />
                <img className="frame-child7" alt="" src={props.icontwo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   
  )
}
export default DisplayHome
