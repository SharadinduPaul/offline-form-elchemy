import { Icommon } from "../../types/common";
import './styles.css'

interface Props extends Icommon {}
export default function Title({ children, className, style }: Props) {
  return (
    <h1 className={"title-main " + className} {...{ style }}>
      {children}
    </h1>
  );
}
