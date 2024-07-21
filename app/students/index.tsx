"use client";
import { useEffect, useState } from "react";
import Tables from "../components/tables";
import SearchHeaders from "../components/searchHeaders";
import axios from "../components/service/api";

export default function Students() {
  const [deleteshow, setdeleteshow] = useState(false);
  const [data, setdata] = useState([]);

  // const onDelete = () => {
  //   setdeleteshow(!deleteshow ? true : false);
  // };

  // const handleRefresh = async (event: Event) => {
  //   event.preventDefault();
  //   try {
  //   } catch (error) {
  //     console.error("API Error:", error);
  //   }
  // };

  useEffect(() => {
    try {
      const response = axios
        .get("/Student")
        .then((e) => setdata(e.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  return (
    <div className="relative h-full">
      <SearchHeaders />
      <Tables dataBody={data} />
    </div>
  );
}
