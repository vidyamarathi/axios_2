import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

function Data_Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data Table</h2>
      <table>
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
      </table>

    </div>

  );
}

export default Data_Table;