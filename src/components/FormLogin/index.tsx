import img from '../../../public/img/login.svg';

export function FormLogin() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 w-full max-w-6xl shadow-2xl rounded-xl overflow-hidden">

        {/* Lado imagem */}
        <div className="max-md:hidden lg:col-span-3 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-12 flex items-center justify-center">
          <img
            src={img}
            className="w-3/4 object-cover rounded-xl opacity-90"
            alt="Barbearia"
          />
        </div>

        {/* Lado formulário */}
        <div className="lg:col-span-2 w-full p-10 bg-[#121212] text-gray-100">
          <form className="space-y-6">

            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-wide">
                Acesso ao Sistema
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Não possui conta?
                <a href="#" className="text-secondary font-medium ml-1 hover:underline">
                  Criar agora
                </a>
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">E-mail</label>
              <input
                type="email"
                required
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 rounded-md bg-[#1c1c1c] border border-[#2a2a2a] text-sm focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Senha</label>
              <input
                type="password"
                required
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 rounded-md bg-[#1c1c1c] border border-[#2a2a2a] text-sm focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Opções */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-secondary" />
                Lembrar-me
              </label>
              <a href="#" className="text-secondary hover:underline">
                Esqueci a senha
              </a>
            </div>

            {/* Botão */}
            <button
              type="button"
              className="w-full py-3 rounded-md font-semibold tracking-wide bg-secondary text-black hover:brightness-110 transition cursor-pointer"
            >
              Entrar
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
              className="w-full py-3 rounded-md flex items-center justify-center gap-3 bg-[#1c1c1c] border border-[#2a2a2a] hover:bg-[#222] cursor-pointer"
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
