"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSetupSchema } from "../schema/formSchema";
import { TAccountSetup } from "../types/formTypes";
import ButtonNext from "@/container/register/components/ui/ButtonNext";
import FormProgress from "@/container/register/components/ui/FormProgress";

type Props = {
  next: () => void;
  prev: () => void;
  update: (data: Partial<TAccountSetup>) => void;
  defaultValues: Partial<TAccountSetup>;
};

const StepThree = ({ next, prev, update, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAccountSetup>({
    resolver: zodResolver(accountSetupSchema),
    defaultValues,
  });

  const onSubmit = (data: TAccountSetup) => {
    update(data);
    next();
  };

  return (
    <div>
      <h2 className="text-4xl text-center my-8 font-medium">
        Register Your Account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Username</label>
          <input {...register("username")} className="input" />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input type="password" {...register("password")} className="input" />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="input"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          <button type="button" onClick={prev} className="btn-secondary">
            Previous
          </button>
          <ButtonNext type="submit">Next</ButtonNext>
        </div>
      </form>
      {/* progress bar  */}
      <FormProgress progress="75%" />
    </div>
  );
};

export default StepThree;
