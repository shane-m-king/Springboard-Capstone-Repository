"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
    
    // Regular expression test for email validation
    const emailRegex = /^\S+@\S+\.\S+$/;

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onRegister = async () => {

    }

    useEffect(() => {
      if (user.email && user.username && user.password) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [user]);

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

export default RegisterPage;