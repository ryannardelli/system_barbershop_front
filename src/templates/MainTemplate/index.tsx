import { Sidebar } from "../../components/Sidebar";

type MainTemplateProps = {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <>
      <Sidebar />

      <div className="ml-0 ml-24 transition-all">
           {children}
      </div>
    </>
  );
};
