import "./DisplayField.css"

function TotalDisplayField({
  labelText,
  total,
}: {
  labelText: string
  total: string | number
}) {
  return (
    <div className="displayField__group displayField__total">
      <label className="displayField__label-total">{labelText}</label>
      <div className="displayField__total-sum">{total}</div>
    </div>
  )
}

export default TotalDisplayField
