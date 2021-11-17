import React, {useEffect, useLayoutEffect, useState} from 'react';
import s from './ConvertMode.module.css'
import {Courses} from './courses/courses';
import {GetRates} from '../DAL/dal';
import Spinner from '../Preloader/Preloader';


const {app_title, amount_title, btnBlock,backBtn} = s;

type ConvertModePropsType = {
    amount: number,
    setIsLoading: (newStatus: boolean) => void
    isLoading: boolean
    setIsConvertMode:(newStatus:boolean)=>void
}
export type RateType = {
    buyUSD: null | number,
    sellUSD: null | number,
    buyEuro: null | number,
    sellEuro: null | number,
    buyRUB: null | number,
    sellRUB: null | number
}
type conversionMoneyType = 'USD' | 'EUR' | 'RUB'


export const ConvertMode = (props: ConvertModePropsType) => {

    const getRates = new GetRates();
    const {amount, setIsLoading, isLoading,setIsConvertMode} = props


    const [rates, setRates] = useState<RateType>({
        buyUSD: null,
        sellUSD: null,
        buyEuro: null,
        sellEuro: null,
        buyRUB: null,
        sellRUB: null
    })

    const correctSum = (amount: number, conversionType: conversionMoneyType) => {
        const ratesCoefficient = () => {
            switch (conversionType) {
                case 'USD':
                    return rates.sellUSD ? rates.sellUSD : 2.45
                case 'EUR':
                    return rates.sellEuro ? rates.sellEuro : 2.45
                case 'RUB':
                    return rates.sellRUB ? rates.sellRUB/100 : 2.45
                default:
                    return 2.45
            }
        }
        return (amount / ratesCoefficient()).toFixed(2)

    }


    const [coefficientFilter, setCoefficientFilter] = useState(null as conversionMoneyType | null)
    const [convertResult, setConvertResult] = useState(correctSum(amount, coefficientFilter ? coefficientFilter : 'USD'))

    const setFilterHandler = (newFilter: conversionMoneyType) => {
        setCoefficientFilter(newFilter)
    }


    useLayoutEffect(() => {
        getRates.getRates().then(res => {
            setRates(res)
            setIsLoading(false)
        })
    }, [])

    useEffect(() =>
        setConvertResult(correctSum(amount, coefficientFilter ? coefficientFilter : 'USD')), [coefficientFilter])


    return (
        <div className={app_title}>
            <div className={backBtn}>
                <button onClick={()=>setIsConvertMode(false)}>back</button>
            </div>
            {!isLoading && <Courses rates={rates}/>}
            {isLoading && <Spinner/>}
            {!isLoading && coefficientFilter &&
            <div className={amount_title}>On {amount} BYN you can buy {convertResult} {coefficientFilter}</div>}
            <div className={btnBlock}>
                <button onClick={() => {
                    setFilterHandler('USD')
                }}>to dollars
                </button>
                <button onClick={() => {
                    setFilterHandler('EUR')
                }}>to euro
                </button>
                <button onClick={() => {
                    setFilterHandler('RUB')
                }}>to rub
                </button>
            </div>
        </div>
    );
}



