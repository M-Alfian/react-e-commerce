import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ onClick, plus }) {
  return (
    <button onClick={onClick}>
      {plus ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus}/>}
    </button>
  )
}