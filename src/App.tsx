import "./App.css";
import PersonalInformationForm from "./components/PersonalInformationForm";

function App() {
  return (
    <div className="main-container">
      <div style={{ width: "95%", margin: "0 auto" }}>
        <div className="form-header">
          <h1>Personal Information</h1>
          <div className="form-step-indicator"></div>
        </div>
        <div className="form-container">
          <PersonalInformationForm />
          <div className="submit-button-container">
            <button className="submit-button">Continue</button>
          </div>
        </div>
        <p className="agreement">
          By clicking continue above, you have agree you the{" "}
          <span className="terms">terms and policy</span> of the service
        </p>
      </div>
    </div>
  );
}

export default App;
