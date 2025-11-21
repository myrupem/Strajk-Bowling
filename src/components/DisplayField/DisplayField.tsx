import "./DisplayField.css"

function DisplayField({
  labelText,
  inputText,
}: {
  labelText: string
  inputText: string
}) {
  return (
    <section className="displayField__wrapper">
      <div className="displayField__group">
        <p className="displayField__labelText">{labelText}</p>
        <p className="displayField__inputText">{inputText}</p>
      </div>
    </section>
  )
}

export default DisplayField
