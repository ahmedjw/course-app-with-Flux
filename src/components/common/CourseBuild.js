import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { createCourse, getCourses } from "../../api/courseApi";
import FormInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";
import { useNavigate } from "react-router-dom";

export default function CourseBuild() {
  const [length, setLength] = useState(0);
  const Navigate = useNavigate();
  useEffect(() => {
    getCourses().then((data) => setLength(data.length + 1));
  }, []);
  return (
    <Formik
      initialValues={{
        id: length,
        title: "",
        slug: "",
        authorId: "",
        category: "",
      }}
      onSubmit={(values) => {
        values.slug = values.title.split(" ").join("-");
        createCourse(values);
        Navigate("/courses");
      }}
    >
      {(props) => (
        <Form className="row g-3">
          <FormInput
            name="title"
            innerText="Title"
            value={props.values.title}
          />
          <FormSelect
            value={props.values.authorId}
            name="authorId"
            options={[
              { id: 1, name: "ahmed" },
              { id: 2, name: "mahmoud" },
            ]}
          />
          <FormInput
            name="category"
            innerText="Catogery"
            value={props.values.category}
          />
          <button className="btn btn-primary" onSubmit={props.handleSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
