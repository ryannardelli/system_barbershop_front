import { useState } from "react";
import imgRegister from "../../../public/img/register.svg";
import { AuthImage } from "../AuthImage";
import { useAuth } from "../../hooks/useAuth";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function FormRegister() {
  const { register, loading, error } = useAuth();

  const [step, setStep] = useState(1);
  const [localError, setLocalError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => {
    if (!isStepValid(step)) return;
    setLocalError(null);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = (currentStep: number) => {
    if (currentStep === 1) {
      return formData.name.trim() && formData.email.trim();
    }

    if (currentStep === 2) {
      return (
        formData.password.length >= 6 &&
        formData.password === formData.confirmPassword
      );
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (formData.password !== formData.confirmPassword) {
      setLocalError("As senhas não coincidem");
      return;
    }

    await register(
      formData.name,
      formData.email,
      formData.password
    );
  };

  return (
    <div className="p-4 bg-[var(--primary)] flex justify-center min-h-screen items-center">
      <div className="bg-white md:rounded-b-full">
        <div className="grid md:grid-cols-2 max-w-7xl w-full shadow-2xl relative overflow-hidden">

          {/* Imagem */}
          <div className="p-4 flex items-center justify-center bg-[var(--primary)]">
            <AuthImage
              src={imgRegister}
              className="max-w-[90%] h-80 object-contain"
              altImage="Cadastro"
            />
          </div>

          {/* Form */}
          <div className="flex items-center p-6 max-w-md w-full mx-auto">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold text-[var(--primary)] text-center mb-8">
                Criar Conta
              </h1>

              {/* ERROS */}
              {(localError || error) && (
                <p className="mb-4 text-sm text-red-600 text-center">
                  {localError || error}
                </p>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <>
                  <label className="text-sm font-semibold text-[var(--primary)] mb-2 block">
                    Nome completo
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 rounded-xl px-4 py-3"
                    placeholder="Seu nome"
                  />

                  <label className="text-sm font-semibold text-[var(--primary)] mt-6 mb-2 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 rounded-xl px-4 py-3"
                    placeholder="Seu email"
                  />
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <label className="text-sm font-semibold text-[var(--primary)] mb-2 block">
                    Senha
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-2 rounded-xl px-4 py-3"
                    placeholder="Mínimo 6 caracteres"
                  />

                  <label className="text-sm font-semibold text-[var(--primary)] mt-6 mb-2 block">
                    Confirmar senha
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border-2 rounded-xl px-4 py-3"
                    placeholder="Confirmar senha"
                  />
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-[var(--secondary)] text-black font-semibold cursor-pointer"
                >
                  {loading ? "Criando conta..." : "Finalizar cadastro"}
                </button>
              )}

              {/* Navegação */}
              <div className="mt-8 space-y-4">
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(step)}
                    className="w-full py-3 rounded-xl bg-[var(--secondary)] text-black font-semibold disabled:opacity-50"
                  >
                    Próximo passo
                  </button>
                )}

                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-3 rounded-xl border cursor-pointer"
                  >
                    Voltar
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[var(--secondary)] opacity-80" />
        </div>
      </div>
    </div>
  );
}
