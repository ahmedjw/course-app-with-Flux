import React from "react";
import { Field } from "formik";
export default function FormInput({ value, name, innerText }) {
  return (
    <div class="mb-3">
      <label className="form-label">{innerText}</label>
      <Field
        type="text"
        name={`${name}`}
        value={value}
        className="form-control"
      />
    </div>
  );
}
