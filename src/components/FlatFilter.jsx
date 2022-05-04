import { useContext } from "react"
import { DataContext } from "../App"

export const FlatFilter = () => {
  const { filter, setFilter } = useContext(DataContext)

  const onTextChange = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value })

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
      <h3>Flat Filter</h3>

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
        <h3>Unterkunftstyp</h3>

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
          <span>Ferienhaus</span>
        </div>
      </div>
      {/* end of Category */}

      {/* Ausstattung */}
      <div className="equipments">
        <h3>Ausstattung</h3>

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
        {/* MIN */}
        <div className="min">
          <label>Min:</label>
          <input type="text" name="priceMin" onChange={onTextChange} />
        </div>

        {/* MAX */}
        <div className="max">
          <label>Max:</label>
          <input type="text" name="priceMax" onChange={onTextChange} />
        </div>
      </div>
      {/* END of Location*/}
    </form>
  )
}
