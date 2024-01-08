import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
      <Sidebar />
      <Layout />
    </div>
  );
}

export default App;
