import { Icommon } from "../../types/common";
import "./styles.css";

interface Props extends Icommon {}
export default function Wrapper({ children, className, style }: Props) {
  return (
    <div className={"wrapper-main " + className} {...{ style }}>
      {children}
    </div>
  );
}
