import logo from "../../imgs/logo.png";

export default function Logo(props) {
  return (
    <img
    alt="logo"
    src={logo}
    style={{
        height: props.height,
        width: props.width,
    }}
    >
    </img>
  )
}
