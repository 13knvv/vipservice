import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import s from './SearchFormPage.module.css'

interface ISearchFormPageProps {
  cityFrom: string
  cityTo: string
  dateGo: string
  dateBack: string
  handleChangeInput: (inputName: string, value: string) => void
  isValidate: boolean
}

const SearchFormPage = (props: ISearchFormPageProps) => {
  const onClickFindTickets = () => {
    alert('button')
  }
  
  const onChangeInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    props.handleChangeInput(e.target.name, e.target.value)
  }

  return <>
    <div className={s.wrapp}>
      <div className={s.searchArea}>
        <Input type="text" name="cityFrom" placeholder="Город вылета" value={props.cityFrom} label="Откуда" onChange={onChangeInput} />
        <Input type="text" name="cityTo" placeholder="Город прилёта" value={props.cityTo}  label="Куда" onChange={onChangeInput} />
        <Input type="date" name="dateGo" min="2022-01-01" value={props.dateGo}  label="Туда" onChange={onChangeInput} />
        <Input type="date" name="dateBack" min="2022-01-01" value={props.dateBack}  label="Обратно" onChange={onChangeInput} />
      </div>
      <div className={s.buttonArea}>
        <Button onClick={onClickFindTickets} 
                disabled={!props.isValidate} >Найти билеты</Button>
      </div>
    </div>
  </>
}

export default SearchFormPage