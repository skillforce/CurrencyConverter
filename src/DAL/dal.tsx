import axios from 'axios';

const instance = 'https://belarusbank.by/api/kursExchange?city=Могилев';


export class GetRates {
    _apiBase = 'https://belarusbank.by/api/kursExchange?city=Могилев';


    getRates = async () => {
        let res = await axios.get(this._apiBase)
        console.log(res)
        return this._transformRates(res.data[0])
    }

    _transformRates = (rates: any) => {
        return {
            buyUSD: Number(rates.USD_out),
            sellUSD:  Number(rates.USD_in),
            buyEuro:  Number(rates.EUR_out),
            sellEuro:  Number(rates.EUR_in),
            buyRUB:  Number(rates.RUB_out),
            sellRUB:  Number(rates.RUB_in)
        }
    }


}


axios.get(instance).then(console.log);