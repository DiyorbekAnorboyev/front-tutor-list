"use client";
import { useSelector } from "react-redux";

type Props = {
  dataHead: string[];
  dataBody: any;
};

const Tables: React.FC<Props> = ({ dataHead, dataBody }) => {
  const data: string[] = ["Ism", "Familya", "So'm", "Guruh"];
  const { isLoading } = useSelector((state: any) => state.student);

  return (
    <div className="w-full absolute h-table-scroll border no-scroll rounded-md overflow-y-scroll touch-pan-y   ">
      {isLoading ? (
        <div className=" flex w-full h-full justify-center items-center">
          <h1>Yuklanmoqda...</h1>
        </div>
      ) : (
        <>
          {dataHead.length > 0 && dataBody.length > 0 ? (
            <table className=" w-full  rounded-md relative ">
              <thead className="rounded-md sticky top-0  w-full bg-violet-500">
                <tr className="w-full">
                  {dataHead
                    ? dataHead.map((e: any) => (
                        <>
                          <th className="border ">{e}</th>
                        </>
                      ))
                    : data.map((e) => (
                        <>
                          <th className="border ">{e}</th>
                        </>
                      ))}
                </tr>
              </thead>
              <tbody className="border ">
                {dataBody
                  ? dataBody.map((e: any, idx: any) => (
                      <>
                        <tr key={idx} className="border capitalize">
                          {Object.keys(e)
                            .filter(
                              (key) =>
                                key !== "_id" &&
                                key !== "__v" &&
                                key !== "ownerId" &&
                                typeof e[key] !== "object"
                            )
                            .map((key, index) => (
                              <td key={index} className="border">
                                {`${e[key]}`}
                              </td>
                            ))}
                        </tr>
                      </>
                    ))
                  : data.map((e) => (
                      <>
                        <td className="border ">{e}</td>
                      </>
                    ))}
              </tbody>
            </table>
          ) : (
            <div className=" flex w-full h-full justify-center items-center">
              <h1> Malumot yoq...</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tables;
