import React from "react";
import { TinputFields } from "../../screens/form/types";
import "./styles.css";

interface Props {
  title?: string;
  value?: string | number;
  field: TinputFields;
  setValue: (key: TinputFields, value: string) => void;
  type?: React.HTMLInputTypeAttribute | string;
  required?: boolean;
  textArea?: boolean;
}
export default function Input({
  field,
  type = "text",
  required = false,
  title = "",
  value = "",
  setValue,
  textArea = false,
}: Props) {
  return (
    <div className="input-main">
      <h4>
        {title}
        <span className="star">{required && " *"}</span>
      </h4>
      {!textArea ? (
        <input
          {...{ type, value }}
          onChange={(e) => setValue(field, e.target.value)}
        />
      ) : (
        <textarea
          {...{ type, value }}
          onChange={(e) => setValue(field, e.target.value)}
        />
      )}
    </div>
  );
}
