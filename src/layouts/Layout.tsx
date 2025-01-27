import Header from "@/components/Header";
import Hero from "@/components/Hero";

type props = {
  children: React.ReactNode;
};

const layout = ({ children }: props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default layout;
