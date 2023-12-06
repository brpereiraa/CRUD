import React, {useEffect, useState} from 'react';
import { User } from '../models/user';
import { useParams } from 'react-router-dom';

const Users = () => {
    
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    const [user, setUser] = useState<User>({} as User);

    const data = useParams();
    
    const handleSubmit = () => {
        const Uuser = {
            id: user.id,
            name: name,
            age: age,
            password: user.password
        };

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Uuser)
        };

        fetch(`http://localhost:8080/api/v1/users/${data.id}`, options)
            .then(res => res.json())
            .catch(error => {
                setErrorMessage({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/getUsers/${data.id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error('There was an error!', error));
    }, []);
    
    return(
        <>
            <div className="w-screen h-screen bg-gray-950">
                <div className="h-1/6 border-b-2"></div>
                <div className="h-5/6">
                    <div className="h-1/2 w-1/2 mx-auto text-center text-white flex">
                        <div className="m-auto w-1/2">
                            <div className="my-8">
                                <label className="block font-bold">Name:</label>
                                <input 
                                    className="py-1 bg-inherit border-b-2 outline-none"
                                    type="text"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="my-8">
                                <label className="block font-bold">Nationality:</label>
                                <input 
                                    className="py-1 bg-inherit border-b-2 outline-none"
                                    type="text"
                                    name="age"
                                    onChange={(e) => setNationality(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="m-auto w-1/2">
                            <div className="my-8">
                                <label className="block font-bold">Age:</label>
                                <input 
                                    className="py-1 bg-inherit border-b-2 outline-none"
                                    type="number"
                                    name="age"
                                    onChange={(e) => setAge(parseInt(e.target.value, 10))}
                                />
                            </div>
                            <div className="my-8">
                                <label className="block font-bold">Gender:</label>
                                <input 
                                    className="py-1 bg-inherit border-b-2 outline-none"
                                    type="text"
                                    name="age"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;