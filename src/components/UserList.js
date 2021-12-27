import React, {useState, useEffect} from 'react';
import {Table, Button} from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const UserList = () => {

  //sets user
  const [users, setUsers] = useState([]);
 
  // To delete specific user
  async function deleteUser(id) {
    try {
      // `` kullanma sebebi içine {id} alabilmek
      await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      });

      setUsers(users.filter(user => user.user_id !== id));       //anlık olarak silinen specific id elemanını yok eder
    } catch (error) {
      console.error(error.message);
    }
  }

  // getUsers() localhost'taki json elemanları çağırır => useEffect içinde
  async function getUsers() {
    const res = await fetch("http://localhost:5000/users")
    const usersArray = await res.json();
    setUsers(usersArray);

  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <Table className="table mt-5" striped bordered hover variant="light" style={{boxShadow:'0px 0px 40px gray'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>İsim</th>
        <th>E-mail</th>
        <th>Akademik Statü</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => (
          <tr key={user.user_id}>
            <td>{ user.user_id }</td>
            <td>{ user.name }</td>
            <td>{ user.email }</td>
            <td>{ user.academic }</td>
            <td> <Button className="btn btn-danger" onClick={() => deleteUser(user.user_id)}><Trash /></Button> </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
  )
}

export default UserList;