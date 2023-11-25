import React, {useState} from 'react';

const Users = () => {
    
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    
    const handleSubmit = () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };

        fetch("http://localhost:8080/api/v1/updateUsers", options)
            .then(res => res.json());
    };
    
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
                                    type="text"
                                    name="age"
                                    onChange={(e) => setAge(e.target.value)}
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;