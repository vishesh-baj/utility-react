import React from "react";
import { AuthLayout } from "../layout";
import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// login page
const LoginPage = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .email("enter valid email")
      .required("email is required"),

    password: yup
      .string()
      .min(6, "atleast 6 characters are required")
      .required("password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // TODO: Integrate API for login
  const onSubmit = (data) => {
    navigate(PATHS.home);
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="gap-5 w-full px-3">
          <h1 className="font-bold text-3xl">Login</h1>
          <div className="form-control my-4">
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              name="email"
              className="input input-ghost w-full max-w-xl focus:bg-transparent"
            />
            <p className="ml-2 mt-2 text-red-600">{errors.email?.message}</p>
          </div>
          <div className="form-control mb-4">
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="input input-ghost w-full max-w-xl focus:bg-transparent"
            />
            <p className="ml-2 mt-2 text-red-600">{errors.password?.message}</p>
          </div>
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card rounded-box place-items-center">
              <button type="submit" className="btn btn-ghost">
                Login
              </button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card rounded-box place-items-center">
              <NavLink to={PATHS.register} className="btn btn-accent">
                Create an account
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
