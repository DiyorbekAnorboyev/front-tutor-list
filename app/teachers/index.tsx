"use client";
import { useEffect, useState } from "react";
import axios from "../components/service/api";
import SearchHeaders from "../components/searchHeaders";
import Tables from "../components/tables";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../components/redux/requests/index";
import { getTeachersS } from "../components/redux/studentSlice";
import { AnyAaaaRecord } from "dns";

export default function Teachers() {
  const dispatch = useDispatch();
  const { teacherData } = useSelector((state: any) => state.student);

  const getTeacherHandler = async () => {
    try {
      const data = await ProductService.getTeachersReq();
      dispatch(getTeachersS(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacherHandler();
  }, []);

  return (
    <>
      <div className="relative h-full">
        <SearchHeaders />
        <Tables dataBody={teacherData} />
      </div>
    </>
  );
}
