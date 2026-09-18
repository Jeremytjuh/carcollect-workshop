// Style
import styles from "./main.style";

function Main(props) {
  const {
    children,
  } = props;

  const classes = styles();

  return (
    <main css={classes.main}>
      {children}
    </main>
  );
}

export default Main;
