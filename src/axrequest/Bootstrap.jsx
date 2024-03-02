import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';

function Bootstrap() {
  const [data, setMyData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setMyData(res.data));
    
  }, []);

  return (
    <>
    
    <h1>Data Table</h1>
    <Table striped bordered hover>

    <thead>
    
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>

    
    </Table>
    </>
 )
}     
    
export default Bootstrap;
