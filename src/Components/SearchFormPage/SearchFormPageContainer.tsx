import { useEffect, useState } from 'react'
import SearchFormPage from './SearchFormPage'

const SearchFormPageContainer = () => {
const [ cityFrom, setCityFrom] = useState<string>('')
const [ cityTo, setCityTo] = useState<string>('')
const [ dateGo, setDateGo] = useState<string>('')
const [ dateBack, setDateBack] = useState<string>('')
const [ isValidate, setIsValidate] = useState<boolean>(false)

const validate = () => {
  setIsValidate(true)

  if (!cityFrom) {
    setIsValidate(false)
  }
  if (cityFrom && !(/^[a-zA-Zа-яА-Я]+$/.test(cityFrom)) ) {
    setIsValidate(false)
  }
  if (!cityTo) {
    setIsValidate(false)
  }
  if (cityTo && !(/^[a-zA-Zа-яА-Я -]+$/.test(cityTo)) ) {
    setIsValidate(false)
  }
  if (!dateGo) {
    setIsValidate(false)
  }
}

useEffect( () => {
  validate()
}, [cityFrom, cityTo, dateGo])

const handleChangeInput = (inputName: string, value: string) => {
  switch (inputName) {
    case 'cityFrom':
      setCityFrom(value)
      break
    case 'cityTo':
      setCityTo(value)
      break
    case 'dateGo':
      setDateGo(value)
      break
    case 'dateBack':
      setDateBack(value)
      break
  }
  
  

}

  return <SearchFormPage  cityFrom={cityFrom} 
                          cityTo={cityTo}
                          dateGo={dateGo}
                          dateBack={dateBack}
                          handleChangeInput={handleChangeInput}
                          isValidate={isValidate} />
}

export default SearchFormPageContainer