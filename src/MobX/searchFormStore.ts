import { makeAutoObservable } from "mobx"

class SearchFormStore {

  cityFrom: string = ''
  cityTo: string = ''
  dateGo: string = ''
  dateBack: string = ''
  isValidate: boolean = false

  constructor() {
      makeAutoObservable(this)
  }

  setCityFrom(value: string) {
    this.cityFrom = value
  }

  setCityTo(value: string) {
    this.cityTo = value
  }

  setDateGo(value: string) {
    this.dateGo = value
  }

  setDateBack(value: string) {
    this.dateBack = value
  }

  setIsValidate(boolean: boolean) {
    this.isValidate = boolean
  }

}

export default SearchFormStore