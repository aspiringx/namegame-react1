import Image from "next/image";

export default function Home() {
  return (
    <div /* Page */
      style={{
        backgroundColor: "lightblue",
        width: 750,
        height: 1500,
        marginLeft: 500,
      }}
    >
      <div /* Header */
        style={{
          backgroundColor: "blue",
          color: "white",
          width: 750,
          height: 100,
          textAlign: "center",
        }}
      >
        Header
      </div>

      <div /* Logo */
        style={{
          backgroundColor: "black",
          color: "white",
          width: 150,
          height: 150,
          borderRadius: "50%",
          marginTop: 50,
          marginLeft: 290,
          textAlign: "center",
        }}
      >
        Logo
      </div>

      <div /* Info Text */
        style={{
          backgroundColor: "red",
          color: "white",
          width: 600,
          height: 100,
          marginTop: 50,
          marginLeft: 75,
          textAlign: "center",
        }}
      >
        Info Text
      </div>

      <div /* Register Form */
        style={{
          backgroundColor: "blue",
          color: "white",
          width: 600,
          height: 750,
          marginTop: 100,
          marginLeft: 75,
          textAlign: "center",
        }}
      >
        Register Form
        <div /* Name Input */
          style={{
            backgroundColor: "white",
            color: "black",
            width: 450,
            height: 100,
            marginTop: 50,
            marginLeft: 75,
            textAlign: "center",
          }}
        >
          Name
        </div>
        <div /* Phone Input */
          style={{
            backgroundColor: "white",
            color: "black",
            width: 450,
            height: 100,
            marginTop: 55,
            marginLeft: 75,
            textAlign: "center",
          }}
        >
          Phone
        </div>
        <div /* Picture Input */
          style={{
            backgroundColor: "white",
            color: "black",
            width: 450,
            height: 175,
            marginTop: 65,
            marginLeft: 75,
            textAlign: "center",
          }}
        >
          Picture
        </div>
        <div /* Submit */
          style={{
            backgroundColor: "white",
            color: "black",
            width: 150,
            height: 75,
            marginTop: 50,
            marginLeft: 375,
            textAlign: "center",
          }}
        >
          Submit
        </div>
      </div>
      <div /* Footer */
        style={{
          backgroundColor: "blue",
          color: "white",
          width: 750,
          height: 100,
          marginTop: 100,
          textAlign: "center",
        }}
      >
        Footer
      </div>
    </div>
  );
}
