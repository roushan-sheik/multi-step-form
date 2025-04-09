"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressDetailsSchema } from "../schema/formSchema";
import { TAddressDetails } from "../types/formTypes";
import ButtonNext from "@/container/register/components/ui/ButtonNext";
import FormProgress from "@/container/register/components/ui/FormProgress";

type Props = {
  next: () => void;
  prev: () => void;
  update: (data: Partial<TAddressDetails>) => void;
  defaultValues: Partial<TAddressDetails>;
};

const StepTwo = ({ next, prev, update, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddressDetails>({
    resolver: zodResolver(addressDetailsSchema),
    defaultValues,
  });

  const onSubmit = (data: TAddressDetails) => {
    update(data);
    next();
  };

  return (
    <div>
      <h2 className="text-4xl text-center my-8 font-medium">
        Enter Your Permanent Address
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Street Address</label>
          <input {...register("streetAddress")} className="input" />
          {errors.streetAddress && (
            <p className="text-red-500">{errors.streetAddress.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">City</label>
          <input {...register("city")} className="input" />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Zip Code</label>
          <input {...register("zipCode")} className="input" />
          {errors.zipCode && (
            <p className="text-red-500">{errors.zipCode.message}</p>
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
      <FormProgress progress="50%" />
    </div>
  );
};

export default StepTwo;
