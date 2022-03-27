// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    isStarClicked: false,
    appointmentList: [],
  }

  onTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onDate = event => {
    this.setState({dateInput: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      name: titleInput,
      date: dateInput,
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onStarClick = () => {
    this.setState(prevState => ({
      isStarClicked: !prevState.isStarClicked,
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppoint => {
        if (id === eachAppoint.id) {
          return {...eachAppoint, isStar: !eachAppoint.isStar}
        }
        return eachAppoint
      }),
    }))
  }

  render() {
    const {titleInput, dateInput, isStarClicked, appointmentList} = this.state
    const starButton = isStarClicked ? 'starredButton' : 'button1'
    const starredItem = appointmentList.filter(
      appoint => appoint.isStar === true,
    )
    const appointmentsItems = isStarClicked ? starredItem : appointmentList
    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <div className="upperContainer">
            <div className="leftCard">
              <h1>Add Appointment</h1>
              <form className="form" onSubmit={this.addAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  id="title"
                  placeholder="Title"
                  type="input"
                  value={titleInput}
                  className="input"
                  onChange={this.onTitle}
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  id="date"
                  type="date"
                  value={dateInput}
                  className="input"
                  onChange={this.onDate}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr className="horizantal-line" />
          <div className="lowerContainer">
            <h1>Appointments</h1>
            <button
              type="button"
              className={starButton}
              onClick={this.onStarClick}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list">
            {appointmentsItems.map(eachAppoint => (
              <AppointmentItem
                details={eachAppoint}
                key={eachAppoint.id}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
