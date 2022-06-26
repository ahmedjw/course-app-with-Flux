import React from "react";
import { Field } from "formik";
export default function FormSelect({ name, options, value }) {
  return (
    <div class="mb-3">
      <label className="form-label ">Author Name</label>
      <Field
        name={`${name}`}
        as="select"
        value={value || ""}
        className="form-control "
      >
        <option value=" ">choose an Author</option>
        {options.map((option) => (
          <option value={`${option.id}`}>{option.name}</option>
        ))}
      </Field>
    </div>
  );
}
