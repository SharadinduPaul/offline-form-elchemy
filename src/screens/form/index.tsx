// import React from "react";
import Wrapper from "../../components/wrapper";
import "./styles.css";
import Title from "../../components/title";
import useForm from "./useForm.hook";
import Input from "../../components/input";
import { formExtendedData, formExtendedData2 } from "./data";
import { TinputFields } from "./types";
import SearchableDropdown from "../../components/dropdown";

export default function Form() {
  const { formData, handleInputChange } = useForm();

  const formFields1: TinputFields[] = Object.keys(
    formExtendedData
  ) as (keyof typeof formExtendedData)[];
  const formFields2: TinputFields[] = Object.keys(
    formExtendedData2
  ) as (keyof typeof formExtendedData)[];

  console.log(formData);
  return (
    <Wrapper>
      <main className="form-container">
        <Title>Fill your details</Title>
        {formFields1.map((field) => {
          const fieldData = formExtendedData[field];
          if (fieldData?.fieldType === "dropdown") {
            return (
              <SearchableDropdown
                key={field}
                title={fieldData.fieldName}
                options={fieldData.dropdown}
                value={formData[field]}
                required={fieldData?.required}
                handleChange={(val) => handleInputChange(field, val)}
              />
            );
          } else {
            return (
              <Input
                key={field}
                type={fieldData?.fieldType}
                value={formData[field]}
                setValue={handleInputChange}
                field={field}
                title={fieldData?.fieldName}
                required={fieldData?.required}
                textArea={fieldData?.fieldType === "textarea"}
              />
            );
          }
        })}
      </main>
    </Wrapper>
  );
}
