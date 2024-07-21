"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();

  const dataUser = {
    email: email,
    password: password,
  };

  console.log(dataUser);

  const fillAllInputs = email.length < 1 || password.length < 1;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:3000/api/Login",
        dataUser
      );

      await window.localStorage.setItem("token", `${data.data}`);

      if (data.data) {
        navigate.push("/");
      }
    } catch (error) {
      fillAllInputs
        ? toast.error("🦄 Wow so easy!")
        : toast.error("🦄 Wow so easy!");
    }
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <div className="w-full">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
        </div>
        {/* //-------------- */}
        <div className="w-full">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                Tizimga kirish
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Parol
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Tizimga kirish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
