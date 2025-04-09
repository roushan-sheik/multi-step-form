import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schema/formSchema";
import { TPersonalInfo } from "../types/formTypes";
import ButtonNext from "@/container/register/components/ui/ButtonNext";
import FormProgress from "@/container/register/components/ui/FormProgress";

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
    <div>
      <h2 className="text-4xl text-center my-8 font-medium">
        Enter Your Contact Info
      </h2>
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
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input {...register("phoneNumber")} className="input" />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <ButtonNext type="submit">Next</ButtonNext>
      </form>
      {/* progress bar  */}
      <FormProgress progress="25%" />
    </div>
  );
};

export default StepOne;
