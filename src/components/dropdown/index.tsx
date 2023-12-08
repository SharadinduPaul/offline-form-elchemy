import React from "react";
import { Tdropdown } from "../../screens/form/types";
import "./styles.css";

interface Props {
  options?: Tdropdown[];
  title?: string;
  value?: string;
  required?: boolean;
  handleChange?: (value: string) => void;
}
const SearchableDropdown = ({
  options = [],
  title = "",
  value = "",
  handleChange = () => {},
  required = false,
}: Props) => {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option: Tdropdown) => {
    setQuery(() => "");
    handleChange(option.label);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e: React.MouseEvent<HTMLInputElement, MouseEvent> | any) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (value) return value;

    return "";
  };

  const filter = () => {
    return options.filter(
      (option) => option.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="dropdown">
      <h4>
        {title}
        <span className="star">{required && " *"}</span>
      </h4>
      <input
        ref={inputRef}
        type="text"
        value={getDisplayValue()}
        name="searchTerm"
        onChange={(e) => {
          setQuery(e.target.value);
          handleChange("");
        }}
        onClick={toggle}
      />

      {isOpen && (
        <div className={`options`}>
          {filter().map((option, index) => {
            return (
              <div
                onClick={() => selectOption(option)}
                className={`option ${option.label === value ? "selected" : ""}`}
                key={`${title}-${index}`}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
