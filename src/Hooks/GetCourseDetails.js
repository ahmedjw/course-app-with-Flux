import { useEffect, useState } from "react";
import { getCourseBySlug } from "../api/courseApi";

export default function getCourseDetails({ course }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [isError, setIsError] = useState(false);
  const GetData = () => getCourseBySlug(course).then((res) => setData(res));
  useEffect(() => {
    try {
      GetData();
      setIsLoading(false);
    } catch (e) {
      setErr(e);
      setIsError(true);
    }
  }, []);

  return { data, isLoading, isError, err };
}
