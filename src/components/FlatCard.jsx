const FlatCard = ({ flat }) => {
  return (
    <div className="flat-card">
      {/* VENUE IMAGE */}
      <div className="image">
        <img
          src={ `${flat.image}.jpg` }
        />
      </div>

      {/* CONTENT */}
      <div className="card-body">
        <h4>{flat.title}</h4>
        <div>{flat.category}</div>
        <div>
          {flat.city} ({flat.country})
        </div>
        <div className="card-equipment">
          {flat.beds > 0 && <span>Beds ({flat.beds})</span>}
          {flat.doubleBeds > 0 && <span>Double Beds ({flat.doubleBeds})</span>}
          {flat.seaview && <span>Seaview</span>}
          {flat.wlan && <span>Free WLAN</span>}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="card-actions">
        <div><span>{flat.pricePerNight} &euro;</span> / per Night</div>
        <div>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
