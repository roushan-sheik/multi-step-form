import { MultiStepFormData } from "./schema";

export const submitFormData = async (
  data: MultiStepFormData
): Promise<MultiStepFormData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 90% success rate for demo
        resolve(data);
      } else {
        reject(new Error("Submission failed. Please try again."));
      }
    }, 1000);
  });
};
