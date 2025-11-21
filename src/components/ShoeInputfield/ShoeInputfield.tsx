import "./ShoeInputfield.css"

interface ShoeInputfieldProps {
  label: string
  id: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const ShoeInputfield = ({
  label,
  id,
  value,
  onChange,
  className = "",
}: ShoeInputfieldProps) => {
  const sizes = Array.from({ length: 31 }, (_, i) => 20 + i)
  return (
    <div className="ShoeInputfield__group">
      <label className="ShoeInputfield__label" htmlFor={id}>
        {label}
      </label>
      <select
        className={`ShoeInputfield  ${className}`}
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="">Välj storlek</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            Euro {size}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ShoeInputfield
