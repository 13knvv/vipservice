import s from './Input.module.css'

interface IInputProps {
  type: string
  placeholder?: string
  min?: string
  value: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IInputProps) => {
  return (<>
    <div className={s.wrapp}>
      <label className={s.label}>{props.label}</label>
      <input className={s.input + ' ' + (props.value ? s.inputDateSelected : '')}
            {...props} />
    </div>
  </>)
}

export default Input