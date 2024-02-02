import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-slate-200 h-full">
        <Navbar />
        <div className="text-lg text-slate-500 px-5">
          About Us
        </div>
      </div>
      <Footer></Footer>
    </div >
  )
}