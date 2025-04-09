"use client";

import { TFormData } from "../types/formTypes";

type Props = {
  prev: () => void;
  data: Partial<TFormData>;
};

const StepSummary = ({ prev, data }: Props) => {
  const handleSubmit = () => {
    console.log("Submitted Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Review Your Information</h2>

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
    </div>
  );
};

export default StepSummary;
