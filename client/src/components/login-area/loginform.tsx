import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error("Erro ao validar login", {
          description: errorData.message || "Erro ao fazer login",
          duration: 3000,
        });

        return;
      }

      const data = await res.json();

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userType", data.userType);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("refreshToken", data.refreshToken);

      if (data.userType === "company") {
        navigate("/empresa");
      } else if (data.userType === "candidate") {
        navigate("/candidato/pagina-inicial");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Erro de conexão");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid bg-white p-6 sm:p-12 rounded-lg shadow-md font-SecondFont max-w-full sm:w-[700px] mx-auto  text-black"
    >
      <h1 className="text-xl text-center">Já possui um cadastro?</h1>

      {error && <p className="text-red-500 text-center mb-3">{error}</p>}

      <label htmlFor="email" className="text-start text-lg mt-2 mb-2">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Insira seu E-mail"
        className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-12  text-black bg-LightGray"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="text-start text-lg mt-2 mb-2">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Insira sua senha"
        className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-12  text-black bg-LightGray"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="grid justify-center">
        <button
          type="submit"
          className="w-80 h-14 bg-deepGreen text-lg sm:text-xl text-white px-2 sm:px-4 py-1 sm:py-1 rounded-lg hover:bg-mediumGreen font-SecondFont mt-12 mb-4"
        >
          FAZER LOGIN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
