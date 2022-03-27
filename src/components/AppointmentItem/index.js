// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {details, toggleIsLiked} = props
  const {name, date, id, isStar} = details
  const starimg = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStarToggle = () => {
    toggleIsLiked(id)
  }

  const para = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="cardItems">
      <div className="cardDetails">
        <p className="name">{name}</p>
        <button
          type="button"
          onClick={onStarToggle}
          className="cardbutton"
          testid="star"
        >
          <img src={starimg} alt="star" />
        </button>
      </div>
      <p className="date">{`Date: ${para}`}</p>
    </li>
  )
}

export default AppointmentItem
