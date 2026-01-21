import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Signup() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  // fake auth: save user locally
  localStorage.setItem("user", JSON.stringify(form));
  localStorage.setItem("isAuthenticated", "true");

  // redirect after signup
  navigate("/ai/dashboard");
}


  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-surface-elevated p-6 rounded-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border"
        />

        <Button className="w-full rounded-xl">Sign Up</Button>
      </form>
    </div>
  );
}