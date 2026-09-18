function Copyright(props) {
  const { color } = props;

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p style={{ color: color || "lightgray" }}>
        Copyright © {currentYear} | CarCollection
      </p>
    </div>
  );
}

export default Copyright;
