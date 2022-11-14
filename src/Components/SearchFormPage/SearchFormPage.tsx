import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import s from './SearchFormPage.module.css'

interface ISearchFormPageProps {
  cityFrom: string
  cityTo: string
  dateGo: string
  dateBack: string
  handleClickFindTickets: () => void
  handleChangeInput: (inputName: string, value: string) => void
  isValidate: boolean
}

const SearchFormPage = (props: ISearchFormPageProps) => {

  const onClickFindTickets = () => {
    props.handleClickFindTickets()
  }
  
  const onChangeInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    props.handleChangeInput(e.target.name, e.target.value)
  }

  return <>
    <div>
      <div className={s.searchArea}>
        <div className={s.cityGroup}>
          <Input  type="text" 
                  name="cityFrom"
                  placeholder="Город вылета"
                  value={props.cityFrom}
                  label="Откуда"
                  onChange={onChangeInput} />
          <Input  type="text"
                  name="cityTo"
                  placeholder="Город прилёта"
                  value={props.cityTo}
                  label="Куда"
                  onChange={onChangeInput} />
        </div>
        <div className={s.dateGroup}>
          <Input  type="date" 
                  name="dateGo"
                  min={new Date().toISOString().split("T")[0]} value={props.dateGo}
                  max={new Date(new Date().getFullYear() + 2 + '').toISOString().split("T")[0]}
                  label="Туда"
                  onChange={onChangeInput} />
          <div className={s.line}></div>
          <Input  type="date"
                  name="dateBack"
                  min={props.dateGo || new Date().toISOString().split("T")[0]}
                  max={new Date(new Date().getFullYear() + 2 + '').toISOString().split("T")[0]}
                  value={props.dateBack}
                  label="Обратно"
                  onChange={onChangeInput} />
        </div>
      </div>
      <div className={s.buttonArea}>
        <Button onClick={onClickFindTickets} 
                disabled={!props.isValidate} >Найти билеты</Button>
      </div>
    </div>
  </>
}

export default SearchFormPage