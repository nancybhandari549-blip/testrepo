import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";


export default function Home() {
  return (
    <>
      <Header />
      {/* Banner will go here */}
      <Banner 
        title="Welcome to My Website"
        subtitle="Enter the Web Experience"
      />
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold">Home Page</h1>
      </main>
      
      <Footer />
      
    </>
  );
}
