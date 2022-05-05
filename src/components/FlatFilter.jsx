import { useContext } from "react"
import { FlatContext } from "../contexts/FlatContext"

export const FlatFilter = () => {
  const { filter, setFilter } = useContext(FlatContext)

  // update text search filters
  const onTextChange = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value })

  // update OR filters (using a javascript SET)
  const onCheckboxSetChange = (e) => {
    const filterKey = e.target.name
    const itemSelected = e.target.value
    let selectionNew = new Set(filter[filterKey])

    // toggle item in set
    e.target.checked
      ? selectionNew.add(itemSelected)
      : selectionNew.delete(itemSelected)
    setFilter({ ...filter, [filterKey]: selectionNew })
  }

  // update AND filters (using an object)
  const onCheckBoxObjectChange = (e) => {
    const optionsKey = e.target.name
    const itemSelected = e.target.value

    const configObjectNew = {
      ...filter[optionsKey],
      [itemSelected]: !filter[optionsKey][itemSelected],
    }

    setFilter({ ...filter, [optionsKey]: configObjectNew })
  }

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
      <div className="categories">
        <h3>Type</h3>

        <div className="filter-item">
          <input
            name="categories"
            type="checkbox"
            value="Apartment"
            onChange={onCheckboxSetChange}
          />
          <span>Apartment</span>
        </div>

        <div className="filter-item">
          <input
            name="categories"
            type="checkbox"
            value="Holiday House"
            onChange={onCheckboxSetChange}
          />
          <span>House</span>
        </div>
      </div>
      {/* end of Category */}

      {/* Ausstattung */}
      <div className="equipments">
        <h3>Equipment</h3>

        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="doubleBeds"
            onChange={onCheckBoxObjectChange}
          />
          <span>Double Beds</span>
        </div>
        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="wlan"
            onChange={onCheckBoxObjectChange}
          />
          <span>WLAN</span>
        </div>
        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="seaview"
            onChange={onCheckBoxObjectChange}
          />
          <span>Seeview</span>
        </div>
      </div>
      {/* end of ausstattung */}

      {/* PRICE RANGE */}
      <div className="priceRange">

        <h3>Price Range</h3>
        {/* MIN */}
        <div className="min">
          <label>Min:</label>
          <input type="number" min="0" name="priceMin" onChange={onTextChange} />
        </div>

        {/* MAX */}
        <div className="max">
          <label>Max:</label>
          <input type="number" min="0" name="priceMax" onChange={onTextChange} />
        </div>
      </div>
      {/* END of Location*/}
    </form>
  )
}
