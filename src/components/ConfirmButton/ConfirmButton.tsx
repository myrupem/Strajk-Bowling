import "./ConfirmButton.css"

type ConfirmButtonProps = {
  text: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

function ConfirmButton({ text, type = "button", onClick }: ConfirmButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default ConfirmButton
