import React from "react";
import { TinputFields } from "./types";
import { formExtendedData, formExtendedData2 } from "./data";
import { toast } from "react-toastify";

const LOCAL_KEY = "elchemy-key";
type TFormData = {
  [x in TinputFields]?: string;
};

let saveInProgress = false;
const saveData = (data: any) => {
  if (saveInProgress) return;
  Promise.resolve()
    .then(function () {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
    })
    .finally(() => {
      saveInProgress = false;
    });
};
const fetchSavedData = async () => {
  return new Promise((resolve, reject) => {
    const raw = localStorage.getItem(LOCAL_KEY);
    const data: TFormData = JSON.parse(raw ?? "");

    if (data) resolve(data);
    else reject(data);
  });
};

export default function useForm() {
  const [activeForm, setActiveForm] = React.useState<1 | 2>(1);
  const [formData, setFormData] = React.useState<TFormData>({});
  const [errors, setErros] = React.useState<TinputFields[]>([])

  React.useEffect(() => {
    saveData(formData);
  }, [formData]);
  React.useEffect(() => {
    fetchSavedData().then((data: any) => {
      toast("Data retrieved successfully", { toastId: "data retrieved" });
      setFormData(data);
    });
  }, []);

  const handleInputChange = (key: TinputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const areAllRequiredFilled = (data: TFormData, form: 1 | 2 = 1): boolean => {
    const extendedData = form === 1 ? formExtendedData : formExtendedData2;
    const formFields1: TinputFields[] = Object.keys(
      extendedData
    ) as (keyof typeof extendedData)[];
    const requiredFields = formFields1.filter(
      (item) => extendedData[item]?.required
    );

    const unFilledFields = requiredFields.filter((item) => !data[item]);

    return unFilledFields.length < 1;
  };
  const handleForm1Submit = () => {
    //validation
    if (!areAllRequiredFilled(formData, 1)) {
      toast("All required fields are not filled", {
        toastId: "allRequiredFields",
      });
      return;
    }
    setActiveForm(2);
  };
  const handleForm2Submit = () => {
    //validation
    if (!areAllRequiredFilled(formData, 2)) {
      toast("All required fields are not filled", {
        toastId: "allRequiredFields",
      });
      return;
    }

    toast("Form submitted successfully");
  };

  const handleReset = () => {
    setFormData({});
  };

  return {
    activeForm,
    setActiveForm,
    formData,
    handleInputChange,
    handleForm1Submit,
    handleForm2Submit,
    handleReset,
  };
}
