import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function BookingPage(props) {

    const navigate = useNavigate();


    const [reservation, setReservation] = useState({
        name: '',
        date: '',
        time: '',
        guests: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

       
        props.dispatch({ type: 'UPDATE_TIMES', payload: reservation })

        navigate('/')
        

        // await fetch(`url to backend`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(reservation)
        // })

    }

    // useEffect(() => {
    //     if ( reservation.date !== '') {
    //         ;
    //     }
    //   }, [reservation]);


    return (
        <> 
        <form onSubmit={handleSubmit}>

            <label htmlFor="res-name">Your Name</label>
            <input required
                value={reservation.name}
                onChange={e => setReservation({ ...reservation, name: e.target.value })}
                className="form-control"
                id="res-name"
                name="res-name"
            />
            <label htmlFor="res-date">Choose a Date</label>
            <input required
                value={reservation.date}
                type="date"
                onChange={e => setReservation({ ...reservation, date: e.target.value })}
                className="form-control"
                id="res-date"
                name="res-date"
            />
            <label htmlFor="res-time">Choose a Time</label>
            <select  required
                value={reservation.time}
                onChange={e => setReservation({ ...reservation, time: e.target.value })}
                className="form-control"
                id="res-date"
                name="res-date" >
        
                {props.availableTimes && props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
        ))}

            </select>

            <label htmlFor="res-guests">Number of Guests</label>
            <input required
                value={reservation.guests}
                type="number"
                placeholder="1" 
                min="1" 
                max="10"
                onChange={e => setReservation({ ...reservation, guests: e.target.value })}
                className="form-control"
                id="res-guests"
                name="res-guests"
            />

            <input className="" type="submit" value="Make Reservation" />

        </form>
        </>

    )
}

