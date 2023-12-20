import React from 'react'
import "../Nav/Nav.css"
import { Link } from 'react-router-dom'
 const Nav = () => {
  const navigation = () => {
    window.location.href = '/agent';
  }
 
  return (
    <div className=''>
    <div className='group-parent'>
         <div className="vector-parent">
          <img className="group-child" alt="" src="/vector-79.svg" />
          <b className="house">
            <span>H</span>
            <span className="ou">ou</span>
            <span>se</span>
          </b>
          <div className="bgr">BgR</div>
          <img
            className="blue-house-icon-isolated"
            alt=""
            src="/blue-house-icon-isolated@2x.png"
          />
        </div>

        <div className='frame-parent'>
        <div className="frame-wrapper">
            <div className="frame-group">
              <div className="vector-group">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <div className="country">Country</div>
              </div>
              <div className="vector-group">
                <div className="country">State</div>
                <img className="vector-icon" alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>

          <div className="an-agent-parent">
            <div className="an-agent">
            <h3 onClick={()=> navigation('/agent') }>Agent</h3>
            </div>
            <img className="jamworld-icon" alt="" src="/jamworld.svg" />
            <div className="frame-container">
              <div className="line-parent">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
              </div>
              <img className="user-circle-icon" alt="" src="/user-circle.svg" />
            </div>
          </div>
        </div>
    </div>
  
   
    </div>
  )
}
export default Nav
