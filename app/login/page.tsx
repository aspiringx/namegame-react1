import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-white home-page">
        <Navbar />
        <div className="px-5 pb-5">
          <div className="bg-white rounded-lg text-black min-h-2 max-w-md opacity-95 text-center items-center m-auto my-36 px-8 py-7 mx-md-4 shadow">
            <div className="text-md text-gray-500 text-left px-3 pb-5">Welcome Back!</div>
            <RegistrationForm />
          </div>
        </div>
      </div>
        <Footer></Footer>
    </div>
  )
}