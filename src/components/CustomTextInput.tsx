interface TextInputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: () => void;
  label?: string;
}

export default function CustomTextInput({
  type,
  id,
  name,
  label,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="text-input-container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="custom-text-input"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
