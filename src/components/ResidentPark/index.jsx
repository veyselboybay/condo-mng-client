import React from 'react'

import { Table } from 'react-bootstrap';

const ResidentPark = () => {
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
                <tr>
                    <td>1</td>
                    <td>ABCD123</td>
                    <td>2015</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>NW1106</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>ABCD124</td>
                    <td>2017</td>
                    <td>Toyota</td>
                    <td>Corolla</td>
                    <td>NW1107</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default ResidentPark