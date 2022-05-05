import { useContext } from "react"
import { FlatContext } from "../contexts/FlatContext"
import { FlatFilter } from "./FlatFilter"
import { FlatList } from "./FlatList"

/**
 * Flats component is a wrapper for the flat page
 *
 * It collects FILTER settings and applies it to create a LIST of Flats
 *
 */
export const Flats = () => {
  const { flats, filter } = useContext(FlatContext)

  let flatsFiltered = flats

  // APPLY filters before displaying flat list...

  // FREE TEXT FILTERS

  // Country
  if (filter.country) {
    flatsFiltered = flatsFiltered.filter((flat) =>
      flat.country.toLowerCase().includes(filter.country.toLowerCase())
    )
  }
  // City
  if (filter.city) {
    flatsFiltered = flatsFiltered.filter((flat) =>
      flat.city.toLowerCase().includes(filter.city.toLowerCase())
    )
  }

  // OR FILTER - Category (e.g. Apartment OR House OR (Apartment OR House))
  if (filter.categories.size) {
    flatsFiltered = flatsFiltered.filter((flat) =>
      // if flat category is in just ONE of the allowed catgories => pick!
      filter.categories.has(flat.category)
    )
  }

  // AND Filter - Equipment (e.g. WLAN AND Seaview)
  if (filter.equipment.size) {
    // EACH stated criteria must match => so filter the set by each criteria
    filter.equipment.forEach( item => {
      flatsFiltered = flatsFiltered.filter((flat) => flat[item])
    })
  }

  // RANGE filter - Price between min & max
  if (filter.priceMin || filter.priceMax) {
    flatsFiltered = flatsFiltered.filter((flat) => {
      let take = true
      // is below min? => exclude!
      if (filter.priceMin && flat.pricePerNight < filter.priceMin) {
        take = false
      }
      // is above max? => exclude !
      if (filter.priceMax && flat.pricePerNight > filter.priceMax) {
        take = false
      }
      return take
    })
  }

  return (
    <div className="flats">
      <FlatFilter />
      <FlatList flats={flatsFiltered} />
    </div>
  )
}
