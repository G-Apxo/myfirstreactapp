import React from "react";

const Input = ({ inputData }) => {
  console.log(inputData);
  return (
    <>
      <p>Inputs go here</p>
      <h1>Inputs</h1>
      {inputData.map((input) => {
        return (
          <div key={input.id}>
            <label htmlFor={input.label}>{input.label}</label>
            <input
              type={input.type}
              id={input.label}
              placeholder={input.placeholder}
              defaultValue={input.defaultValue}
              required={input.required}
            />
          </div>
        );
      })}
    </>
  );
};

export default Input;
