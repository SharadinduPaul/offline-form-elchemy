// import React from "react";

import useForm from "./useForm.hook";
import Wrapper from "../../components/wrapper";
import Title from "../../components/title";
import Input from "../../components/input";
import SearchableDropdown from "../../components/dropdown";
import Button from "../../components/button";

import { TinputFields } from "./types";
import { TExtendedDataType, formExtendedData, formExtendedData2 } from "./data";
import "./styles.css";

export default function Form() {
  const {
    formData,
    handleInputChange,
    handleForm1Submit,
    handleForm2Submit,
    activeForm,
    setActiveForm,
    handleReset,
    errors,
  } = useForm();

  const formFields1: TinputFields[] = Object.keys(
    formExtendedData
  ) as (keyof typeof formExtendedData)[];
  const formFields2: TinputFields[] = Object.keys(
    formExtendedData2
  ) as (keyof typeof formExtendedData2)[];

  console.log(formData);

  const getElement = (field: TinputFields, data?: TExtendedDataType) => {
    const fieldData = data ? data[field] : formExtendedData[field];
    if (fieldData?.children) {
      const childrenFields: TinputFields[] = Object.keys(
        fieldData.children
      ) as (keyof typeof fieldData.children)[];
      return (
        <div key={field} style={{ display: "flex", gap: "20px" }}>
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
          {...{ errors }}
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
          {...{ errors }}
        />
      );
    }
  };
  return (
    <Wrapper>
      {activeForm === 1 ? (
        <main className="form-container">
          <Title>Fill your details</Title>
          {formFields1.map((field) => getElement(field))}
          <div className="row">
            <Button onClick={() => handleReset(1)} success>
              Reset
            </Button>
            <Button
              style={{ alignSelf: "flex-end" }}
              onClick={handleForm1Submit}
              success
            >
              Next
            </Button>
          </div>
        </main>
      ) : (
        <main className="form-container">
          <Title>Fill additional details</Title>
          {formFields2.map((field) => getElement(field, formExtendedData2))}
          <div className="row">
            <Button onClick={() => setActiveForm(1)}>Previous</Button>
            <Button onClick={() => handleReset(2)} success>
              Reset
            </Button>
            <Button onClick={handleForm2Submit} success>
              Submit
            </Button>
          </div>
        </main>
      )}
    </Wrapper>
  );
}
