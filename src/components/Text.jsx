import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java",
          "Python",
          "C#",
          "React Js",
          "AspNet",
          "Rest API"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  )
}

export default Text