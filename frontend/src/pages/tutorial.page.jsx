import { useEffect, useState } from "react";
// * Uncomment the line(s) below by selecting it and pressing `ctrl + /` or `cmd + /` or remove the `//` in front
// import { Container } from "@mui/material";
// import { useRouter } from "next/router";
import Copyright from "../modules/copyright";

// ? MUI Container docs: https://v7.mui.com/material-ui/api/container/
// ? MUI Button docs: https://v7.mui.com/material-ui/api/button/
// * Useful Button props: color, variant, onClick

// ? Next Router docs: https://nextjs.org/docs/pages/api-reference/functions/use-router

function TutorialPage() {
  const name = "John";

  // ? HTML colors: https://www.w3schools.com/colors/colors_names.asp
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    console.log("The text color was changed to:", textColor);
  }, [textColor]);

  // const router = useRouter();

  return (
    <div>
      <h1>Welcome to the workshop, {name}!</h1>

      <p style={{ color: textColor }}>
        This is what we will be editing first!
      </p>

      {/* Place Button(s) below */}

      <Copyright color="" />
    </div>
  );
}

export default TutorialPage;
