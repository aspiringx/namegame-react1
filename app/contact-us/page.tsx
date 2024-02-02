import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="bg-slate-200 h-full">
        <Navbar />
        <div className="text-lg text-slate-500 px-5">
          Contact Us
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}