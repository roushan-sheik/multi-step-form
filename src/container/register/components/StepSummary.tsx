"use client";
import { ToastContainer, toast } from "react-toastify";
import { TFormData } from "../types/formTypes";
import FormProgress from "@/container/register/components/ui/FormProgress";

type Props = {
  prev: () => void;
  data: Partial<TFormData>;
};

const StepSummary = ({ prev, data }: Props) => {
  const handleSubmit = () => {
    console.log("Submitted Data:", data);
    toast("Form submitted successfully!", { position: "top-center" });
    // alert("Form submitted successfully!");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-4xl text-center my-8 font-medium">Submit Now</h2>
      <h2 className="text-2xl font-bold ">Review Your Information</h2>

      <ToastContainer />
      <div className="grid gap-2">
        <p>
          <strong>Full Name:</strong> {data.fullName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phoneNumber}
        </p>
        <p>
          <strong>Street:</strong> {data.streetAddress}
        </p>
        <p>
          <strong>City:</strong> {data.city}
        </p>
        <p>
          <strong>Zip Code:</strong> {data.zipCode}
        </p>
        <p>
          <strong>Username:</strong> {data.username}
        </p>
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={prev} className="btn-secondary">
          Previous
        </button>
        <button type="button" onClick={handleSubmit} className="btn-primary">
          Submit
        </button>
      </div>
      {/* progress bar  */}
      <FormProgress progress="100%" />
    </div>
  );
};

export default StepSummary;
