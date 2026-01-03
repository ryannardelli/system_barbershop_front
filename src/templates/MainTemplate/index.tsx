import { Sidebar } from "../../components/Sidebar";

type MainTemplateProps = {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <>
      <Sidebar />

      {children}
    </>
  );
};
