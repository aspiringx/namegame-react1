import Image from "next/image";

export default function Home() {
  return (
    <div /* Page */ className="page">
      <div /* Header */ className="header">Header</div>
      <div /* Logo */ className="logo">Logo</div>
      <div /* Info Text */ className="infoText">Info Text</div>
      <div /* Register Form */ className="registerForm">
        Register Form
        <div /* Name Input */ className="nameInput">Name</div>
        <div /* Phone Input */ className="phoneInput">Phone</div>
        <div /* Picture Input */ className="pictureInput">Picture</div>
        <button /* Submit */ className="submitButton">Submit</button>
      </div>
      <div /* Footer */ className="footer">Footer</div>
    </div>
  );
}
