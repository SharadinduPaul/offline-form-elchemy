import React from "react";
import { TinputFields } from "../../screens/form/types";
import "./styles.css";
import { capitalizeInitials } from "../../screens/form/validators";

interface Props {
  title?: string;
  value?: string | number;
  field: TinputFields;
  setValue: (key: TinputFields, value: string) => void;
  type?: React.HTMLInputTypeAttribute | string;
  required?: boolean;
  textArea?: boolean;
  errors?: TinputFields[];
}
export default function Input({
  field,
  type = "text",
  required = false,
  title = "",
  value = "",
  setValue,
  textArea = false,
  errors,
}: Props) {
  return (
    <div className="input-main">
      <h4>
        {title}
        <span className="star">{required && " *"}</span>
      </h4>
      {!textArea ? (
        <input
          style={{
            borderColor: errors?.includes(field) ? "red" : "rgb(73, 82, 92)",
          }}
          {...{ type, value }}
          onChange={(e) => setValue(field, e.target.value)}
        />
      ) : (
        <textarea
          style={{
            borderColor: errors?.includes(field) ? "red" : "rgb(73, 82, 92)",
          }}
          {...{ type, value }}
          onChange={(e) => setValue(field, e.target.value)}
        />
      )}
      {errors?.includes(field) && (
        <p className="error">
          Please enter a valid {capitalizeInitials(field)}
        </p>
      )}
    </div>
  );
}
