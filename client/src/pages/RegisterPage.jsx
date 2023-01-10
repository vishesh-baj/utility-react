import React from "react";
import { AuthLayout } from "../layout";
import { PATHS } from "../routes/paths";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterPage = () => {
  const schema = yup.object({
    firstName: yup
      .string("firstname must be a string")
      .required("firstname is required"),
    lastName: yup
      .string("lastname must be a string")
      .required("lastname is required"),

    email: yup
      .string()
      .email("enter valid email")
      .required("email is required"),

    password: yup
      .string()
      .min(6, "atleast 6 characters are required")
      .required("password is required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // TODO: Integrate API for register
  const onSubmit = (data) => console.log(data);
  return (
    <AuthLayout>
      <div className="w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="gap-5 w-full px-3">
          <h1 className="font-bold text-3xl">Register</h1>
          <div className="form-control my-4">
            <input
              {...register("firstName")}
              type="text"
              placeholder="first name"
              name="firstName"
              className="input input-ghost w-full max-w-xl focus:bg-transparent"
            />
            <p className="ml-2 mt-2 text-red-600">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="form-control mb-4">
            <input
              {...register("lastName")}
              type="text"
              placeholder="last name"
              name="lastName"
              id="lastName"
              className="input input-ghost w-full max-w-xl focus:bg-transparent"
            />
            <p className="ml-2 mt-2 text-red-600">{errors.lastName?.message}</p>
          </div>

          <div className="form-control mb-4">
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              name="email"
              id="email"
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
          <div className="form-control mb-4">
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              id="confirmPassword"
              className="input input-ghost w-full max-w-xl focus:bg-transparent"
            />
            <p className="ml-2 mt-2 text-red-600">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card rounded-box place-items-center">
              <button type="submit" className="btn btn-ghost">
                Register
              </button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card rounded-box place-items-center">
              <NavLink to={PATHS.login} className="btn btn-accent text-xs">
                Already have account?
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
