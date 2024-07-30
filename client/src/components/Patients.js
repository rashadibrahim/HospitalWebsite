import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./Patients.css";


function Patients() {
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    if (localStorage.getItem('isAdmin') === 'true') {
      setTimeout(() => { // simulate a delay
        axios.get("http://localhost:3001/api/patients")
          .then((response) => {
            setData(() => {
              if (response.data.length === 0) {
                setNoData(() => {
                  return (<div className='noData'>
                    No Data To Be Displayed
                  </div>)
                })

              } else {
                return (
                  response.data.map(element => { //set data
                    return (<tr key={element['username']} className='tableRow'>
                      <td>{element['name']}</td>
                      <td>{element['username']}</td>
                      <td>{element['email']}</td>
                      <td>{element['age']}</td>
                      <td>
                        <button onClick={selectedRow} className='selBtn' value={element['_id']}>Select</button>
                        <button onClick={deleteRow} className='delBtn' value={element['_id']}>Delete</button>
                      </td>
                    </tr>)
                  })
                )
              }
            });
            setLoading(false); //set loading state
          });
      }, 1000);
    } else {
      console.log("You're Not an Admin");
      navigate('/');
      return;
    }

    function selectedRow(event) {
      localStorage.setItem('id', event.target.value);
      navigate('/edit');
    }

    function deleteRow(event) {
      event.preventDefault();
      const patientID = event.target.value;
      axios.delete('http://localhost:3001/api/deletePatient', { data: { id: patientID } }).then((res) => {
        alert(`${res.data['username']} Deleted`);
        window.location.reload(false);
      }).catch(err => {
        alert('An Error Occurred')
        console.log(err)
      })
    }

  }, [navigate]);

  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the Data {console.log("loading Data")}</div>
    )
  }




  return (
    <div className='patients-Main'>
      <div className='patients-Header'>
        <Link to="/">Home</Link>
        < br />
        <Link to="/admin/mypage">Show My Page</Link>
        < br />
      </div>
      <h1>Patients Info</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col-md-4">Name</th>
            <th >Username</th>
            <th>Email</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      {noData}


    </div>
  )
}

export default Patients