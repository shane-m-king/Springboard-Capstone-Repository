"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const onLogin = async () => {

    }



    return (
        <div>
            <h1>LOGIN</h1>
            <hr />
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
            <button onClick={onLogin}>
                Login
            </button>
            <Link href="/register">Register here</Link>              
        </div>
    )
}