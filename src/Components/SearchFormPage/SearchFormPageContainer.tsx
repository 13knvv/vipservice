import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStores } from '../../MobX/stores'
import SearchFormPage from './SearchFormPage'

const SearchFormPageContainer = () => {
  const navigate = useNavigate();
  const searchFormStore = useStores().searchFormStore
  const cityFrom = searchFormStore.cityFrom
  const cityTo = searchFormStore.cityTo
  const dateGo = searchFormStore.dateGo
  const dateBack = searchFormStore.dateBack
  const isValidate = searchFormStore.isValidate

  const validate = () => {
    searchFormStore.setIsValidate(true)

    if (!cityFrom) {
      searchFormStore.setIsValidate(false)
    }
    if (cityFrom && !(/^[a-zA-Zа-яА-Я]+$/.test(cityFrom)) ) {
      searchFormStore.setIsValidate(false)
    }
    if (!cityTo) {
      searchFormStore.setIsValidate(false)
    }
    if (cityTo && !(/^[a-zA-Zа-яА-Я -]+$/.test(cityTo)) ) {
      searchFormStore.setIsValidate(false)
    }
    if (!dateGo) {
      searchFormStore.setIsValidate(false)
    }
    if (dateBack && dateBack < dateGo) {
      searchFormStore.setIsValidate(false)
    }
  }

  useEffect( () => {
    validate()
  }, [cityFrom, cityTo, dateGo, dateBack])

  const handleChangeInput = (inputName: string, value: string) => {
    switch (inputName) {
      case 'cityFrom':
        searchFormStore.setCityFrom(value)
        break
      case 'cityTo':
        searchFormStore.setCityTo(value)
        break
      case 'dateGo':
        searchFormStore.setDateGo(value)
        break
      case 'dateBack':
        searchFormStore.setDateBack(value)
        break
    }
  }

  const handleClickFindTickets = () => {
    navigate("/avia/info")
  }

    return <SearchFormPage  cityFrom={cityFrom} 
                            cityTo={cityTo}
                            dateGo={dateGo}
                            dateBack={dateBack}
                            handleClickFindTickets={handleClickFindTickets}
                            handleChangeInput={handleChangeInput}
                            isValidate={isValidate} />
}

export default observer(SearchFormPageContainer)