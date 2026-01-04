import { Sidebar } from "../../components/Sidebar";

type MainTemplateProps = {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <>
      <Sidebar />

      <div className="md:ml-20 transition-all">
           {children}
      </div>
    </>
  );
};
