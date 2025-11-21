interface InputFieldProps {
  label: string
  id: string
  type?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  className?: string
}

const InputField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  min,
  max,
  className = "",
}: InputFieldProps) => {
  return (
    <div className="inputField__group">
      <label className="inputField__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`inputField  ${className}`}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  )
}

export default InputField
