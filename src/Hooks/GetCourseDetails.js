import { useEffect, useState } from "react";
import Store from "../sotres/store";

export default function getCourseDetails({ course }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setData(Store.getCourseBySlug(course));
      setIsLoading(false);
    } catch (e) {
      setErr(e);
      setIsError(true);
    }
  }, []);

  return { data, isLoading, isError, err };
}
