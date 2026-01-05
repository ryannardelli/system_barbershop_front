import { useEffect, useState } from "react";
import img from "../../../public/img/login.svg";
import { AuthImage } from "../AuthImage";
import { RouterLink } from "../RouterLink";
import { useAuth } from "../../hooks/useAuth";
import { showMessage } from "../../adapters/showMessage";
import { useNavigate } from "react-router";

export function FormLogin() {
  const {
    login,
    loginWithGoogle,
    loading,
    error,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Exibe erro de login
  useEffect(() => {
    if (error) {
      showMessage.error("Email ou senha inválidos.", true);
    }
  }, [error]);

  // Redireciona quando autenticar (email OU Google)
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 w-full max-w-6xl shadow-2xl rounded-xl overflow-hidden">

        {/* Lado imagem */}
        <div className="max-md:hidden lg:col-span-3 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-12 flex items-center justify-center">
          <AuthImage
            src={img}
            className="w-3/4 object-cover rounded-xl opacity-90"
            altImage="Barbearia"
          />
        </div>

        {/* Lado formulário */}
        <div className="lg:col-span-2 w-full p-10 bg-[#121212] text-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-wide">
                Acesso ao Sistema
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Não possui conta?
                <RouterLink
                  href="/register"
                  className="text-secondary font-medium ml-1 hover:underline"
                >
                  Criar agora
                </RouterLink>
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 rounded-md bg-[#1c1c1c] border border-[#2a2a2a]"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 rounded-md bg-[#1c1c1c] border border-[#2a2a2a]"
              />
            </div>

            {/* Botão Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md font-semibold tracking-wide bg-secondary text-black hover:brightness-110 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>

            {/* Divisor */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <hr className="flex-1 border-[#2a2a2a]" />
              ou
              <hr className="flex-1 border-[#2a2a2a]" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={loginWithGoogle}
              disabled={loading}
              className="w-full py-3 rounded-md flex items-center justify-center gap-3 bg-[#1c1c1c] border border-[#2a2a2a] disabled:opacity-50 cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5"
              />
              Entrar com Google
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
