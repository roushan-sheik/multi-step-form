import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schema/formSchema";
import { TPersonalInfo } from "../types/formTypes";

type Props = {
  next: () => void;
  update: (data: Partial<TPersonalInfo>) => void;
  defaultValues: Partial<TPersonalInfo>;
};

const StepOne = ({ next, update, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  const onSubmit = (data: TPersonalInfo) => {
    update(data);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Full Name</label>
        <input {...register("fullName")} className="input" />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input {...register("email")} className="input" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input {...register("phoneNumber")} className="input" />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>

      <button type="submit" className="btn-primary">
        Next
      </button>
    </form>
  );
};

export default StepOne;
