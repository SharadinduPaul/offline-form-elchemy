
import { Icommon } from "../../types/common";
import "./styles.css";

interface Props extends Icommon {
  onClick?: () => void;
  success?: boolean;
}
export default function Button({
  children = "Click me",
  onClick = () => {},
  className = "",
  style = {},
  success,
}: Props) {
  return (
    <button
      className={"button-main " + className + (success ? " success" : "")}
      {...{ onClick, style }}
    >
      {children}
    </button>
  );
}
