import { Heading } from "../../../Heading";

export function ProfessionalClient() {
  return(
    <section className="min-h-screen space-y-8 bg-primary text-gray-100 p-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Heading title="Nossos Profissionais" subtitle="Especialistas prontos para te atender" />
      </header>
    </section>
  );
}
