type StepIndicatorProps = {
  step: {
    name: string;
  };
  progress: boolean;
};

export default function StepIndicator({ step, progress }: StepIndicatorProps) {
  return (
    <div
      className={
        progress
          ? "form-step-indicator current-form-step-indicator"
          : "form-step-indicator"
      }
      key={step.name}
    ></div>
  );
}
