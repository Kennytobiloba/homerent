import React from 'react'
import '../Publish/Publish.css'
import { Link } from 'react-router-dom'
const Publish = () => {
  return (
    <div>
 <div className="land-lord-registration-publish">
      <div className="vector-parent-publish">
        <img className="group-child-publish" alt="" src="/vector-79.svg" />
        <b className="house-publish">
          <span>H</span>
          <span className="ou-publish">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-publish">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-publish"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <div className="back-wrapper-publish" >
        <div className="back-publish"><Link to="/Price">Back</Link></div>
      </div>
      <div className="next-wrapper-publish" >
        <div className="next-publish">Next</div>
      </div>
      <div className="step-3-parent-publish">
        <b className="step-3-publish">Step 3</b>
        <b className="finish-and-publish-publish">Finish and Publish</b>
        <div className="check-all-the-publish">
          Check all the details carefully and necessary informations for users
          to contact you. no additional price must be included. No agent fees.
        </div>
      </div>
      <img
        className="httpslottiefilescomanimat-icon-publish"
        alt=""
        src="/httpslottiefilescomanimationssendkiwf0stlo2@2x.png"
      />
    </div>



    </div>
  )
}

export default Publish




