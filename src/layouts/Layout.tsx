import Footer from "@/components/Footer";
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
      <Footer />
    </div>
  );
};

export default layout;

//Note that this is the file that'll hold all of the reoccuring components across pages like the header for example.
