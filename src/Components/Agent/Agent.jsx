import React from 'react'
import "../Agent/Agent.css"
import { Link } from 'react-router-dom'
const Agent = () => {
  return (
    <div>
      <div className="land-lord-registrations">
      <div className="vector-parents">
        <img className="group-childs" alt="" src="/vector-79.svg" />
        <b className="houses">
          <span>H</span>
          <span className="ous">ou</span>
          <span>se</span>
        </b>
        <div className="bgrs">{`BgR `}</div>
        <img
          className="blue-house-icon-isolateds"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <div className="rectangle-parents">
        <div className="group-items" />
        <img
          className="blue-house-icon-isolated1s"
          alt=""
          src="/blue-house-icon-isolated1@2x.png"
        />
        <div className="it-is-quite-containers">
          <span className="it-is-quites" >It is quite easy to set up your account on </span>
          <span>BgR H</span>
          <span className="ou1s">ou</span>
          <span>se</span>
        </div>
      </div>
      <i className="shall-wes">Shall we?</i>
      <div className="frame-parents">
        <div className="parents">
          <b className="bs">1</b>
          <b className="bs">Tell us about your place</b>
        </div>
        <div className="share-us-somes">
          Share us some basic info, like the location, type of apartment, Fenced
          or not, security, city or rural
        </div>
      </div>
      <div className="frame-groups">
        <div className="groups">
          <b className="bs">3</b>
          <b className="finish-up-ands">Finish up and Publish</b>
        </div>
        <div className="check-all-thes">
          Check all the details carefully and necessary informations for users
          to contact you. no additional price must be included. No agent fees.
        </div>
      </div>
      <div className="line-parents">
        <div className="frame-childs" />
        <div className="frame-childs" />
      </div>
      <div className="get-started-wrappers" >
      <div className="get-starteds">    <Link to="/apartment">Get started</Link></div>
      </div>
      <div className="frame-containers">
        <div className="groups">
          <b className="bs">2</b>
          <b className="finish-up-ands">Make it unique</b>
        </div>
        <div className="check-all-thes">
          Add up to 5 images plus a title and description of the apartment, it
          is important for the images to contain toilet, bathroom, room,
          surroundings.
        </div>
      </div>
    </div>

      
    </div>
  )
}
export default Agent






