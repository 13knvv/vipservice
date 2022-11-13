import { useState } from 'react'
import SearchFormPage from './SearchFormPage'

const SearchFormPageContainer = () => {
const [ cityFrom, setCityFrom] = useState<string>('')
const [ cityTo, setCityTo] = useState<string>('')
const [ dateGo, setDateGo] = useState<string>('')
const [ dateBack, setDateBack] = useState<string>('')

const validate = () => {
  
}

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
                          handleChangeInput={handleChangeInput}  />
}

export default SearchFormPageContainer