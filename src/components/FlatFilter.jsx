import { useContext } from "react";
import { FlatContext } from "../contexts/FlatContext";

export const FlatFilter = () => {
  const { filter, setFilter } = useContext(FlatContext);

  // update text search filters
  const onTextChange = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });

  // update checkbox filters
  // (using a javascript SET => sets have the advantage to store arrays with unique (!) values only)
  const onCheckboxChange = (e) => {
    const filterKey = e.target.name;
    const itemSelected = e.target.value;
    let selectionNew = new Set(filter[filterKey]);

    // toggle item in set
    e.target.checked
      ? selectionNew.add(itemSelected)
      : selectionNew.delete(itemSelected);
    setFilter({ ...filter, [filterKey]: selectionNew });
  };

  return (
    <form className="flat-filter">
      <h3>Location</h3>

      {/* LOCATION */}
      <div className="location">
        {/* COUNTRY */}
        <div className="country">
          <label>Country: </label>
          <input type="text" name="country" onChange={onTextChange} />
        </div>

        {/* CITY */}
        <div className="city">
          <label>City:</label>
          <input type="text" name="city" onChange={onTextChange} />
        </div>
      </div>
      {/* END of Location*/}

      {/* CATEGORY  */}
        <h3>Type</h3>
      <div className="categories">

        <div className="filter-item">
          <label>
            <input
              name="categories"
              type="checkbox"
              value="Apartment"
              onChange={onCheckboxChange}
            />
            <span>Apartment</span>
          </label>
        </div>

        <div className="filter-item">
          <label>
            <input
              name="categories"
              type="checkbox"
              value="Holiday House"
              onChange={onCheckboxChange}
            />
            <span>House</span>
          </label>
        </div>
      </div>
      {/* end of Category */}

      {/* Ausstattung */}
      <h3>Equipment</h3>
      <div className="equipments">

        <div className="filter-item">
          <label>
            <input
              name="equipment"
              type="checkbox"
              value="doubleBeds"
              onChange={onCheckboxChange}
            />
            <span>Double Beds</span>
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              name="equipment"
              type="checkbox"
              value="wlan"
              onChange={onCheckboxChange}
            />
            <span>WLAN</span>
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              name="equipment"
              type="checkbox"
              value="seaview"
              onChange={onCheckboxChange}
            />
            <span>Seaview</span>
          </label>
        </div>
      </div>
      {/* end of ausstattung */}

      {/* PRICE RANGE */}
      <h3>Price Range</h3>
      <div className="priceRange">
        {/* MIN */}
        <div className="min">
          <label>Min:</label>
          <input
            type="number"
            min="0"
            name="priceMin"
            onChange={onTextChange}
          />
        </div>

        {/* MAX */}
        <div className="max">
          <label>Max:</label>
          <input
            type="number"
            min="0"
            name="priceMax"
            onChange={onTextChange}
          />
        </div>
      </div>
      {/* END of Location*/}
    </form>
  );
};
