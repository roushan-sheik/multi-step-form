"use client";

import { useState } from "react";
import { TFormData, TFormStep } from "../types/formTypes";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepSummary from "../components/StepSummary";
import SectionContainer from "../SectionContainer";

const MultiStepForm = () => {
  const [step, setStep] = useState<TFormStep>(1);
  const [formData, setFormData] = useState<Partial<TFormData>>({});

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4) as TFormStep);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1) as TFormStep);

  const updateFormData = (data: Partial<TFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <SectionContainer>
      <div className="w-full bg-blue-300 min-h-[75vh]">
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
      </div>
    </SectionContainer>
  );
};

export default MultiStepForm;
