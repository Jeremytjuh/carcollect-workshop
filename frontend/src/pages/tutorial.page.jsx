import { useEffect, useState } from "react";

// https://mui.com/material-ui/api/container/

function TutorialPage() {
  const name = "Jeremy";

  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    console.log("The text color was changed to:", textColor);
  }, [textColor]);

  return (
    <div>
      <h1>Welcome to the workshop, {name}!</h1>
      <div style={{ color: textColor }}>This is what we will be editing first!</div>
    </div>
  );
}

export default TutorialPage;
