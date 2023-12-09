import React from "react";
import { TinputFields } from "./types";
import { formExtendedData, formExtendedData2 } from "./data";
import { toast } from "react-toastify";
import { isValidEmail, isValidUrl } from "./validators";

const LOCAL_KEY = "elchemy-key";
type TFormData = {
  [x in TinputFields]?: string;
};

let saveInProgress = false;
const saveData = (data: any) => {
  if (saveInProgress) return;
  saveInProgress = true;
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
  const [errors, setErrors] = React.useState<TinputFields[]>([]);

  const removeError = (field: TinputFields) => {
    const index = errors.indexOf(field);
    if (index > -1) {
      setErrors((prev) => {
        const arr = prev;
        return arr.splice(index, 1);
      });
    }
  };
  const addError = (field: TinputFields) => {
    setErrors((prev) => [...prev, field]);
  };

  const validate = (data: TFormData) => {
    const fields: TinputFields[] = Object.keys(data) as (keyof typeof data)[];
    // console.log(fields);
    fields.forEach((field) => {
      if (field === "EMAIL") {
        !isValidEmail(data?.EMAIL) ? addError("EMAIL") : removeError("EMAIL");
      } else if (field === "PINCODE") {
        data.PINCODE?.length === 6
          ? removeError("PINCODE")
          : addError("PINCODE");
      } else if (field === "PHONE") {
        data.PHONE?.length === 10 ? removeError("PHONE") : addError("PHONE");
      } else if (field === "GITHUB_LINK") {
        isValidUrl(data?.GITHUB_LINK)
          ? removeError("GITHUB_LINK")
          : addError("GITHUB_LINK");
      }
    });
  };
  // Debounce function
  const debounce = React.useCallback(
    <T extends any[]>(func: (...args: T) => void, delay: number) => {
      let timeoutId: any;
      return function debounced(...args: T) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    },
    [] // No dependencies, as the function doesn't depend on any external values
  );

  const debouncedSaveAndValidate = debounce(() => {
    saveData(formData);
    validate(formData);
  }, 500);

  React.useEffect(() => {
    debouncedSaveAndValidate();
  }, [formData, debouncedSaveAndValidate]);
  React.useEffect(() => {
    fetchSavedData().then((data: any) => {
      toast("Data retrieved successfully", { toastId: "data retrieved" });
      setFormData(data);
    });

    setInterval;
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
    if (errors.length > 0) {
      toast("Please provide valid details");
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
    if (errors.length > 0) {
      toast("Please provide valid details");
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
    errors,
  };
}
