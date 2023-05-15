import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Select,
    Box,
    HStack,
    Flex,
  } from "@chakra-ui/react"

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
        <Flex width={'full'} align={'center'} justifyContent={'center'}>
        <Box padding={'5%'}>
        <form onSubmit={handleSubmit} >

            <HStack justifyContent={'center'} marginY={2}>
            <FormControl>
            <FormLabel htmlFor="res-name">Your Name</FormLabel>
            <Input required
                value={reservation.name}
                onChange={e => setReservation({ ...reservation, name: e.target.value })}
                className="form-control"
                id="res-name"
                name="res-name"
            />
            </FormControl>

            <FormControl id="res-guests" >
            <FormLabel htmlFor="res-guests">Number of Guests</FormLabel>
            <Input required
                value={reservation.guests}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                onChange={e => setReservation({ ...reservation, guests: e.target.value })}
                id="res-guests"
                name="res-guests"
                maxWidth={'40%'}
            />
            </FormControl>

            </HStack>

            <HStack justifyContent={'center'} marginY={2}>
            <FormControl>
            <FormLabel htmlFor="res-date">Choose a Date</FormLabel>
            <Input required
                value={reservation.date}
                type="date"
                onChange={e => setReservation({ ...reservation, date: e.target.value })}
                className="form-control"
                id="res-date"
                name="res-date"
            />
            </FormControl>

            <FormControl>
            <FormLabel htmlFor="res-time">Choose a Time</FormLabel>
            <Select  required
                value={reservation.time}
                onChange={e => setReservation({ ...reservation, time: e.target.value })}
                className="form-control"
                id="res-time"
                name="res-time"
                maxWidth={'70%'}
                >

                {props.availableTimes && props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
        ))}

            </Select>
            </FormControl>

            </HStack>

            <HStack>
            <Button
            mt={4}
            type="submit"
            size={'md'}
            width={'10rem'}
            alignSelf={'center'}
          > Make a reservation </Button>
            </HStack>

        </form>
        </Box>
        </Flex>

        </>

    )
}

