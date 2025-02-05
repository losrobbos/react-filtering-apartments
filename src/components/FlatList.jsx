import { useEffect } from "react"
import FlatCard from "./FlatCard"
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

// register plugin globally
gsap.registerPlugin(Flip);

export const FlatList = ({ flats }) => {

  // TODO: whenever cards changed => apply GSAP flip!
  // PROBLEM: we cannot hook into the BEFORE and AFTER State with React
  // TODO: explore useGSAP hook 
  useEffect(() => {
    const cards = document.querySelectorAll(".flat-card")

    if(cards.length) {
      const cardsState = Flip.getState(cards)
    }

  }, [flats])

  return (
    <div className="flat-list">
      {flats.map((flat) => (
        <FlatCard key={flat._id} flat={flat} />
      ))}
    </div>
  )
}
