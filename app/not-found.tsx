import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--brand-light)] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <h1 className="text-9xl font-bold text-[var(--brand)] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto">
          Much like your calves, this page does not exist.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[var(--brand)] hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Return Home
        </Link>
      </main>
      
      <Footer />
    </div>
  );
}
