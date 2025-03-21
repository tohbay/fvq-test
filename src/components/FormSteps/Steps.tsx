import StepIndicator from "./StepIndicator";
import { onboardingSteps } from "../../constants";

export default function Steps({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="step-indicator-containter">
      {onboardingSteps.map((step, index) => {
        const progress = index === currentIndex || currentIndex > index;
        return <StepIndicator step={step} progress={progress} />;
      })}
    </div>
  );
}
