// import React from "react";
import Wrapper from "../../components/wrapper";
import "./styles.css";
import Title from "../../components/title";
import useForm from "./useForm.hook";
import Input from "../../components/input";
import { TExtendedDataType, formExtendedData, formExtendedData2 } from "./data";
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

  const getElement = (field: TinputFields, data?: TExtendedDataType) => {
    const fieldData = data ? data[field] : formExtendedData[field];
    if (fieldData?.children) {
      const childrenFields: TinputFields[] = Object.keys(
        fieldData.children
      ) as (keyof typeof fieldData.children)[];
      return (
        <div style={{display: 'flex', gap: '20px'}}>
          {childrenFields.map((item) => getElement(item, fieldData.children))}
        </div>
      );
    } else if (fieldData?.fieldType === "dropdown") {
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
  };
  return (
    <Wrapper>
      <main className="form-container">
        <Title>Fill your details</Title>
        {formFields1.map((field) => getElement(field))}
      </main>
    </Wrapper>
  );
}
