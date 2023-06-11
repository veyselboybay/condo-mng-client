import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'react-bootstrap';
import { getParkings } from '../../features/Parking/parkingSlice';
const VisitorPark = () => {
    const { authToken } = useSelector(store => store.auth);
    const { cars, parking } = useSelector(store => store.parking);
    const dispatch = useDispatch();
    let count = 0;
    useEffect(() => {
        dispatch(getParkings(authToken))
        // console.log(cars)
    }, [])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>License Plate</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Make</th>
                    <th>Unit#</th>
                </tr>
            </thead>
            <tbody>
                {parking && parking.map((park, index) => {

                    if (park.parkingType === 'Visitor') {
                        const car = cars.find(car => car._id === park.cars);
                        count = count + 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{car.licensePlate}</td>
                            <td>{car.year}</td>
                            <td>{car.model}</td>
                            <td>{car.make}</td>
                            <td>{park.unitNo}</td>
                        </tr>
                    }
                })}
            </tbody>
        </Table>
    );

}

export default VisitorPark