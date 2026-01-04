import { useState } from "react";
import imgRegister from "../../../public/img/register.svg";
import { AuthImage } from "../AuthImage";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function FormRegister() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = (currentStep: number) => {
    if (currentStep === 1) return formData.name && formData.email;
    if (currentStep === 2) return formData.password && formData.confirmPassword;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-4 bg-[var(--primary)] flex justify-center min-h-screen items-center">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white md:rounded-b-full">
          <div className="grid md:grid-cols-2 max-w-7xl w-full shadow-2xl relative overflow-hidden">

            {/* Imagem */}
            <div className="p-4 flex items-center justify-center bg-[var(--primary)]">
              <AuthImage src={imgRegister} className="max-w-[90%] h-80 object-contain" altImage="Cadastro" />
            </div>

            {/* Form */}
            <div className="flex items-center p-6 max-w-md w-full mx-auto">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[var(--primary)] text-center">
                    Criar Conta
                  </h1>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <>
                    <label className="text-sm font-semibold text-[var(--primary)] block mb-2">
                      Nome completo
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-[var(--secondary)] rounded-xl px-4 py-3 outline-none"
                      placeholder="Seu nome"
                    />

                    <div className="mt-6">
                      <label className="text-sm font-semibold text-[var(--primary)] block mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 focus:border-[var(--secondary)] rounded-xl px-4 py-3 outline-none"
                        placeholder="Seu email"
                      />
                    </div>
                  </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <>
                    <label className="text-sm font-semibold text-[var(--primary)] block mb-2">
                      Senha
                    </label>
                    <input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-[var(--secondary)] rounded-xl px-4 py-3 outline-none"
                      placeholder="Senha"
                    />

                    <div className="mt-6">
                      <label className="text-sm font-semibold text-[var(--primary)] block mb-2">
                        Confirmar senha
                      </label>
                      <input
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 focus:border-[var(--secondary)] rounded-xl px-4 py-3 outline-none"
                        placeholder="Confirmar senha"
                      />
                    </div>
                  </>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-[var(--primary)] mb-4">
                      Confirmar dados
                    </h2>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[var(--secondary)] hover:brightness-110 text-black font-semibold"
                    >
                      Finalizar cadastro
                    </button>
                  </div>
                )}

                {/* Navegação */}
                <div className="mt-8 space-y-4">
                  {step < 3 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid(step)}
                      className={`w-full py-3 rounded-xl font-semibold
                        ${
                          isStepValid(step)
                            ? "bg-[var(--secondary)] text-black hover:brightness-110"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                      Próximo passo
                    </button>
                  )}

                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-full py-3 rounded-xl border border-gray-300 text-[var(--primary)] hover:bg-gray-100"
                    >
                      Voltar
                    </button>
                  )}

                  {/* Indicador */}
                  <div className="flex justify-center gap-4 mt-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-3 h-3 rounded-full ${
                          s === step
                            ? "bg-[var(--secondary)]"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </form>
            </div>

            {/* Decorativo */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[var(--secondary)] opacity-80 max-sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
