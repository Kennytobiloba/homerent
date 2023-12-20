import React, { useState } from 'react';
import '../Item/Item.css';
import data from '../data/data';
import { useParams } from 'react-router-dom';
import SimpleDialog from '../SimpleDialog/SimpleDialog'; // Assuming you have the SimpleDialog component in a file

const Item = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(!!id);
  const [selectedItem, setSelectedItem] = useState(data.find((item) => item.id === parseInt(id, 10)) || null);

  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="group-parent1">
      {data.map((item) => (
        <div key={item.id} className="grid-item" onClick={() => handleClickOpen(item)}>
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
              <div
                className="mr-james-alaka-landlord-parent"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
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
      ))}

      {/* Display the Material-UI dialog for the selected item */}
      {selectedItem && (
        <SimpleDialog
          selectedItem={selectedItem}
          open={open}
          onClose={handleClose}
         
        />
      )}
    </div>
  );
};

export default Item;
