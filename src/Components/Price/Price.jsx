import React from 'react'
import "../Price/Price.css"
import { Link } from 'react-router-dom'
const Price = () => {
  return (
    <div>

<div className="add-images-price">
      <div className="vector-parent-price" >
        <img className="group-child-price" alt="" src="/vector-79.svg" />
        <b className="house-price">
          <span>H</span>
          <span className="ou-price">ou</span>
          <span>se</span>
        </b>
        <div className="bgr-price">{`BgR `}</div>
        <img
          className="blue-house-icon-isolated-price"
          alt=""
          src="/blue-house-icon-isolated@2x.png"
        />
      </div>
      <b className="set-a-price-price">Set a price for the apartment</b>
      <b className="how-many-toilets-price">How many toilets are in the apartment?</b>
      <div className="frame-parent-price">
        <div className="back-wrapper-price" >
          <div className="back-price"><Link to="/Offers">Back</Link></div>
        </div>
        <div className="next-wrapper-price">
          <div className="next-price"><Link to="/Publish">Next</Link></div>
        </div>
      </div>
      <b className="create-a-description-price">
        Create a description about your apartment
      </b>
      <div className="share-what-makes-price">
        Share what makes your apartment special.
      </div>
      <div className="rectangle-parent-price">
        <div className="group-item-price" />
        <div className="annual-parent-price">
          <div className="annual-price">Annual</div>
          <div className="payment-breakdown-price">Payment Breakdown</div>
        </div>
        <div className="group-parent-price">
          <div className="house-rent-wrapper-price">
            <div className="house-rent-price">House Rent</div>
          </div>
          <div className="k-naira-price">70k naira</div>
        </div>
        <div className="group-container-price">
          <div className="security-fee-wrapper-price">
            <div className="house-rent-price">Security Fee</div>
          </div>
          <div className="k-naira-price">10k naira</div>
        </div>
        <div className="frame-div-price">
          <div className="electricity-bill-wrapper-price">
            <div className="house-rent">Electricity Bill</div>
          </div>
          <div className="k-naira-price">30k naira</div>
        </div>
        <div className="group-parent1-price">
          <div className="damages-fee-wrapper-price">
            <div className="house-rent-price">Damages Fee</div>
          </div>
          <div className="k-naira-price">10k naira</div>
        </div>
        <div className="group-parent2-price">
          <div className="total-wrapper-price">
            <div className="house-rent-price">{`Total: `}</div>
          </div>
          <div className="k-naira-price">120k naira</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Price



