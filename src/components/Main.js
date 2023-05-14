import BookingPage from "./BookingPage";
import { useReducer } from "react";
import { fetchAPI } from "../api";
import HomePage from "./HomePage";

export default function Main() {

    // initialize available times state with reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INITIALIZE_TIMES':
                return initializeTimes();
            case 'UPDATE_TIMES':
                return updateTimes(state, action.payload);
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

    // initialize available times
    function initializeTimes() {
        const date = new Date();
        return fetchAPI(date);
    }

    // update available times based on selected date
    function updateTimes(state, reservation) {

        const selectedDate = reservation.date; 

        //console.log(state)

        const selectedTimeIndex = state.indexOf(reservation.time); // find index of selected time

        if (selectedTimeIndex > -1) {
            state.splice(selectedTimeIndex, 1); // remove selected time from available times
        }


        return state
        
    }

    if (window.location.pathname === "/booking") {
        return (
            <main>
                <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
            </main>
        )
    }

    else {
        return (
            <main>
                <HomePage /> 
            </main>
        )
    }

}