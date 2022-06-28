import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../actions/CourseActions";

export default function Course({ info }) {
  const navigate = useNavigate();
  return (
    <tr key={info.id}>
      <td>
        <Link to={"/course/" + info.slug}>{info.title}</Link>
      </td>
      <td>{info.authorId}</td>
      <td>{info.category}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            deleteCourse(info.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
