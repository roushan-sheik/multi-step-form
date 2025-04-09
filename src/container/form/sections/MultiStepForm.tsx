"use client";

import { useState } from "react";
import { TFormData, TFormStep } from "../types/formTypes";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepSummary from "../components/StepSummary";

const MultiStepForm = () => {
  const [step, setStep] = useState<TFormStep>(1);
  const [formData, setFormData] = useState<Partial<TFormData>>({});

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (data: Partial<TFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {step === 1 && (
        <StepOne
          next={nextStep}
          update={updateFormData}
          defaultValues={formData}
        />
      )}
      {step === 2 && (
        <StepTwo
          next={nextStep}
          prev={prevStep}
          update={updateFormData}
          defaultValues={formData}
        />
      )}
      {step === 3 && (
        <StepThree
          next={nextStep}
          prev={prevStep}
          update={updateFormData}
          defaultValues={formData}
        />
      )}
      {step === 4 && <StepSummary prev={prevStep} data={formData} />}
    </div>
  );
};

export default MultiStepForm;
