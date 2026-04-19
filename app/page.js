"use client";

import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 Amjad SaaS</h1>

      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <div>
          <p>Welcome {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </main>
  );
}
