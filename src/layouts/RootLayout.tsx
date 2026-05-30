import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeshGradient from "../components/MeshGradient";
import InteractiveParticles from "../components/InteractiveParticles";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <MeshGradient />
      <InteractiveParticles />
      
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-12 pb-16 relative z-10 w-full max-w-5xl">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
