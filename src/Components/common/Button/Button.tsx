import s from './Button.module.css'

interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}

const Button = (props: IButtonProps) => {
  return (
    <button className={s.button} {...props} >
      {props.children}
    </button>
  )
}

export default Button