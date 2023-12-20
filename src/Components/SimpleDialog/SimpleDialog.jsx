// SimpleDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import "../SimpleDialog/SimpleDialog.css"
import { Link } from 'react-router-dom';

const SimpleDialog = ({ selectedItem, open, onClose, selectedItems }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        style: {
          maxWidth: 'none', // Remove the maxWidth restriction
          width: '60%',
          height:"100vh"
        },
      }}
    >
      <DialogTitle></DialogTitle>
      <DialogContent>
        {/* Your custom design */}

        <div>


    <div className="small-design-dialog ">
      <div className="recently-sold-and-rent-wrapper-dialog">
        <div className="recently-sold-and-dialog ">Recently sold and Rent</div>
      </div>
      <div className="frame-parent-dialog ">
        <div className="frame-group-dialog ">
         
          <img className="frame-child-dialog " alt="" src="/frame-150@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-149@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-148@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-143@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-147@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-144@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-145@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-146@2x.png" />
        </div>
        <div className="frame-group-dialog ">
          <img className="frame-child-dialog " alt="" src="/frame-1421@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-1431@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-1441@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-1451@2x.png" />
          <img className="frame-child-dialog " alt="" src="/frame-1461@2x.png" />
        </div>
      </div>
      <div className="frame-div-dialog ">
        <div className="listed-few-days-ago-wrapper-dialog ">
          <div className="listed-few-days-dialog ">Listed few days ago</div>
        </div>
        <div className="frame-parent1-dialog ">
         
          <div className="frame-child20-dialog " />
        </div>
      </div>
      <img className="small-design-child-dialog " alt="" src="/frame-1492@2x.png" />
      <div className="hero-section-parent">
        <div className="hero-section-dialog ">
          <div className="hero-section1-dialog ">
            <img className="hero-section-child-dialog " alt="" src="/group-2.svg" />
            <img className="hero-section-item-dialog " alt="" src="/vector-80.svg" />
            <div className="looking-for-a-container-dialog ">
              <span>
                <span className="looking-dialog ">{`Looking `}</span>
              </span>
              <span className="for-a-place-to-rentsell-or-bu-dialog ">
                <span>{`for a `}</span>
                <span className="place-dialog ">place</span>
                <span> to rent,sell or buy?</span>
              </span>
            </div>
            <div className="hero-section-inner-dialog " />
            <div className="ellipse-div-dialog " />
            <div className="browse-wrapper-dialog ">
              <b className="browse-dialog ">Browse</b>
            </div>
            <img className="vector-icon-dialog " alt="" src="/vector-81.svg" />
            <img className="hero-section-child1-dialog " alt="" src="/vector-82.svg" />
            <div className="hero-section-child2-dialog " />
            <div className="hero-section-child3-dialog " />
            <div className="buy-sell-or-dialog ">{`Buy, sell or rent your apartment `}</div>
          </div>
        </div>
        <div className="vector-parent-dialog ">
          <img className="frame-child21-dialog " alt="" src="/vector-79.svg" />
          <b className="house-dialog ">
            <span>H</span>
            <span className="ou-dialog ">ou</span>
            <span>se</span>
          </b>
          <div className="bgr-dialog ">{`BgR `}</div>
          <img
            className="blue-house-icon-isolated-dialog "
            alt=""
            src="/"
          />
        </div>
        <div className="rent-dialog ">{`Rent `}</div>
        <div className="buy-dialog ">Buy</div>
        <div className="locations-dialog ">Locations</div>
        <div className="review-dialog ">Review</div>
        <div className="pricing-dialog ">Pricing</div>
        <div className="sign-up-parent-dialog ">
          <div className="sign-up-dialog ">Sign up</div>
          <div className="sign-in-wrapper-dialog ">
            <div className="sign-in-dialog ">Sign in</div>
          </div>
        </div>
        <div className="rectangle-div-dialog " />
      </div>
      <div className="land-lord-registration-dialog ">
      <img
              className="land-lord-registration-child-dialog"
              alt=""
              src={selectedItem.dalogone}
            />
            <img
              className="land-lord-registration-item-dialog"
              alt=""
              src={selectedItem.dalogtwo}
            />
            <img
              className="land-lord-registration-inner-dialog"
              alt=""
              src={selectedItem.dalogthree}
            />
        <div className="ellipse-parent-dialog ">
          <div className="frame-child22-dialog " />
          <div className="div-dialog ">+</div>
          <div className="div1-dialog ">{`20 `}</div>
          <div className="more-dialog ">{`More `}</div>
          <div className="pictures-dialog ">Pictures</div>
        </div>
        <img
          className="land-lord-registration-child1-dialog "
          alt=""
          src="/frame-175@2x.png"
        />
        <div className="comodo-house-dialog ">Comodo house</div>
        <div
          className="click-to-view-more-details-wrapper-dialog "
          
        >
          <Link to="/Dialog">
          <div className="click-to-view-dialog " >Click to view more details</div>
          </Link>
        </div>
      </div>
    </div>
</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
