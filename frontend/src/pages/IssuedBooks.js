import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

const IssuedBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/issues")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container mt-4">
          <h4>Issued Books</h4>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>User</th>
                <th>Book</th>
                <th>Return Date</th>
                <th>Fine</th>
              </tr>
            </thead>

            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.return_date}</td>
                  <td>₹{item.fine}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default IssuedBooks;