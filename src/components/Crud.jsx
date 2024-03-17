import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

function Crud() {
    const [newName, setNewName] = useState("");
    const [newMarks, setNewMarks] = useState(0);  

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, marks: Number(newMarks) });
        getUsers();
    };

    const updateUser = async (id, marks) => {
        const userDoc = doc(db, "Users", id);
        const newFields = { marks: marks + 1 };
        await updateDoc(userDoc, newFields);
        getUsers();
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "Users", id);  
        await deleteDoc(userDoc);
        getUsers();
    };

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        console.log('iam data',data)
        data.docs.map((doc) => console.log({ ...doc.data(), id: doc.id }))
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container mx-auto rounded-lg">
            <div className="p-10">
                <h1 className="text-6xl py-3">Enter your details</h1>
                <input className="p-2 border border-black rounded-lg"
                    type="text"
                    placeholder="Name..."
                    onChange={(event) => {
                        setNewName(event.target.value);
                    }}
                />
                <input
                className="p-2 border border-black rounded-lg"
                    type="number"
                    placeholder="Marks..."
                    onChange={(event) => {
                        setNewMarks(event.target.value);
                    }}
                />
                <button className="p-2 m-2 bg-pink-500 rounded-lg" onClick={createUser}>Create User</button>
            </div>
            <div className="user-cards p-10">
                {users.map((user) => (
                    <div key={user.id} className="bg-pink-50 p-4 border border-black ">
                        <h1 className="text-2xl m-2">Name: {user.name}</h1>
                        <h1 className="text-2xl m-2">Marks: {user.marks}</h1>
                        <button className="p-2 m-2 bg-gray-500 rounded-lg" onClick={() => updateUser(user.id, user.marks)}>
                            Increase Marks
                        </button>
                        <button className="p-2 m-2 bg-gray-300 rounded-lg" onClick={() => deleteUser(user.id)}>Delete User</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Crud;
