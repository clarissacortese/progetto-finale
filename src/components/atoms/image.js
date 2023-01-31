export default function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        margin: "12px",
      }}></img>
  );
}
