import React from 'react'
import data from "../data/data"
import DisplayHome from '../DisplayHome/DisplayHome'
import "../Display/Display.css"


 const Display = (props) => {
  return (
    <div className='group-parent1'>
      
      {data.map((item, i) => {  
        if (props.category === item.category) {
          return(
            <div key={item.id} className="grid-item">
            <div className="group-div">
              <div className="frame-parent6">
                <div className="frame-parent7">
                  <div className="vector-parent7">
                    <img className="vector-icon7" alt="" src="/vector7.svg" />
                    <div className="lagosisland-nigeria">{item.location}</div>
                  </div>
                  <div className="frame-parent8">
                    <div className="group-parent2">
                      <div className="n-parent">
                        <div className="n">N</div>
                        <div className="group-item" />
                        <div className="group-inner" />
                      </div>
                      <div className="div">{item.price}</div>
                    </div>
                    <div className="anually">{item.year}</div>
                  </div>
                </div>
                <div className="monday-25th-sept">{item.date}</div>
              </div>
              <div className="frame-wrapper1">
                <div className="mr-james-alaka-landlord-parent"  style={{ backgroundImage: `url(${item. imageUrl})`,  }}  >
                  <div className="mr-james-alaka-container">
                    <span className="mr-james-alaka">{item.landlordNName}</span>
                    <span className="landlord">Landlord</span>
                  </div>
                  <img className="ellipse-icon" alt="" src={item.iconone} />
                  <img className="frame-child7" alt="" src={item.icontwo} />
                </div>
              </div>
            </div>
          </div>


          )
              
        }
        return null;
      })}
    </div>

   
  )
}
export default Display
