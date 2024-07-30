"use client";
import { useEffect } from "react";
import SearchHeaders from "../components/searchHeaders";
import Tables from "../components/tables";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../components/redux/requests/index";
import { getGroupsS, startLoading } from "../components/redux/studentSlice";
export default function Groups() {
  const dispatch = useDispatch();
  const { groupData } = useSelector((state: any) => state.student);

  const getGroupHandler = async () => {
    try {
      dispatch(startLoading())
      const data = await ProductService.getGroupsReq();
      dispatch(getGroupsS(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGroupHandler();
  }, []);

  const data: string[] = ["Guruh Nomi", "Ustoz", "Vaqt"];
  const dataHead = ["F.I.O"];

  return (
    <>
      <div className="relative h-full">
        <SearchHeaders dataHead={dataHead} />
        <Tables dataHead={data} dataBody={groupData} />
      </div>
    </>
  );
}
