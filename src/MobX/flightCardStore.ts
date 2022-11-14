import { makeAutoObservable } from "mobx"

interface IFlightInformation {
  cityFrom: string;
  cityTo: string;
  dateGo: string;
  dateBack: string;
  type: string,
  company: string,
  logoCompany: string,
  price: string,
  time: Array<string> | null
}

class FlightCardStore {

  flightInformation: IFlightInformation = {
                                  cityFrom: '',
                                  cityTo: '',
                                  dateGo: '',
                                  dateBack: '',
                                  type: '',
                                  company: '',
                                  logoCompany: '',
                                  price: '',
                                  time: null,
                                }

  constructor() {
      makeAutoObservable(this)
  }

  setFlightInformation = (info: IFlightInformation) => {

  }
  

  getFlightInformation = async ( cityFrom: string,
                                  cityTo: string,
                                  dateGo: string,
                                  dateBack: string ) => {
      try {
        const result = await function() {
          console.log('Запрос на сервер: ' +
                      cityFrom + cityTo + dateGo + dateBack )
          if (!dateBack) {
            return {
              cityFrom,
              cityTo,
              dateGo,
              dateBack,
              type: 'Не возвратный',
              company: 'S7 Airlines',
              logoCompany: './../logo.svg',
              price: '4150',
              time: ['09:20 - 11:05', '10:20 - 12:05', '11:20 - 13:05']
            }
          } else {
            return {
              cityFrom,
              cityTo,
              dateGo,
              dateBack,
              type: 'Не возвратный',
              company: 'S7 Airlines',
              logoCompany: './../logo.svg',
              price: '9300',
              time: ['22:57 - 11:05', '22:57 - 11:05']
            }
          }
          
        }()
        this.setFlightInformation(result)
      } catch {
        console.log('Ошибка')
      }
      
  }

}


export default FlightCardStore