import React, {useState} from 'react';
import {useEffect} from "react";

const Home = () => {


const [counter, setCounter] = useState(0)
const [users, setUsers] = useState([])
    useEffect(() => {
        console.log("useEffect сработал!!!")

        // setTimeout(() => {
        //     setCounter(counter + 1)
        // },1000)

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(counter)
    return (
        <div>



            <h1>{counter}</h1>
            <button
            onClick={() => {
                setCounter(counter + 1)
            }}
            >click</button>


            <div className="container">
                {
                    users.map(el => (
                        <h3>{el.name}</h3>
                    ))
                }
            </div>


        </div>
    );
};

export default Home;