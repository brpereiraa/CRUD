import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { User } from "../models/user";
import '../App.css'

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/getUsers")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  const handleEdit = (e:any, id:number) => {
    e.preventDefault();
    navigate(`/users/${id}`);
  }

  const handleDelete = (e:any, id:number) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/v1/users/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        if (data.deleted) {
          setUsers(users.filter((user) => user.id != id));
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  return (
    <main>
      <div className="box-border w-screen h-screen bg-gray-950">
        <div className="w-full h-1/6 border-b-2"></div>
        <div className="w-full h-5/6">
          <div className="w-3/4 m-auto pt-12">
            <table className="text-white table-auto m-auto text-center w-full">
              <thead className="border-b-2">
                <tr className="h-[4rem]">
                  <th className="">Name</th>
                  <th>Age</th>
                  <th>Password</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="odd:bg-gray-100">

                {users.map((user) => (
                  <tr className="" key={user.id}>
                    <td className="">{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.password}</td>
                    <td>
                      <button className="bg-gray-900 w-2/4 rounded py-1 my-4" onClick={(e) => handleEdit(e, user.id)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="bg-gray-900 w-2/4 rounded py-1 my-4" onClick={(e) => handleDelete(e, user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
