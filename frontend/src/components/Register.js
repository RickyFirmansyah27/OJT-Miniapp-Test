import React, { useState } from 'react';


import axios from 'axios';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                name: name,
                email: email,
                gender: gender,
                password: password,
            });
            window.location.href = "/";
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg)
            }

        }
    }



    return (
        <section className="hero is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={handleSubmit}  className="box">
                            
                                <h1 className="title is-2">Register</h1>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Gender</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            placeholder="Gender"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            type="password"
                                            className="input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******"
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button
                                        type="submit"
                                        className="button is-success is-fullwidth"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
