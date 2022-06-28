import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { getCourses } from "../../api/courseApi";
import FormInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { createCourse } from "../../actions/CourseActions";
import Store from "../../sotres/store";

let schema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(2, "the title is to small"),
  category: yup
    .string()
    .required()
    .min(2, "the title is to small"),
});
export default function CourseBuild() {
  const [length, setLength] = useState(0);
  const Navigate = useNavigate();
  useEffect(() => {
    getCourses().then((data) => {
      setLength(Store.length);
      console.log(Store.length);
    });
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
      validationSchema={schema}
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
