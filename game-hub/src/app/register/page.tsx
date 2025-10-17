"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function RegisterPage() {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    })

    const onRegister = async () => {

    }



    return (
        <div>
            <h1>REGISTER</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email" 
            />
            <label htmlFor="username">username</label>
            <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username" 
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password" 
            />
            <button onClick={onRegister}>
                Register
            </button>
            <Link href="/login">Login here</Link>              
        </div>
    )
}