import React from 'react';
import s from './courses.module.css';
import {RateType} from '../ConvertMode';


const {coursesBlock, oneCourse, CoursesTablet} = s;

type CoursePropsType = {
    rates: RateType
}


export const Courses = (props: CoursePropsType) => {
    const {rates} = props;
    const {buyUSD, sellUSD, buyEuro, sellEuro, buyRUB, sellRUB} = rates


    const correctRates = (rates:number):number=>{
        return Number(rates.toFixed(2))
    }


    return (

        <div className={coursesBlock}>


            <h3>Exchange rates:</h3>
            <div className={CoursesTablet}>
                <div className={oneCourse}>
                    <span>USD</span>
                    <div>Buy 1$ = {buyUSD && correctRates(buyUSD)} BYN</div>
                    <div>Sell 1$ = {sellUSD && correctRates(sellUSD)} BYN</div>
                </div>
                <div className={oneCourse}>
                    <span>Euro</span>
                    <div>Buy 1€ = {buyEuro && correctRates(buyEuro)} BYN</div>
                    <div>Sell 1€ = {sellEuro && correctRates(sellEuro)} BYN</div>
                </div>
                <div className={oneCourse}>
                    <span>RUB</span>
                    <div>Buy 1₽ = {buyRUB && (correctRates(buyRUB)/100).toFixed(2)} BYN</div>
                    <div>Sell 1₽ = {sellRUB && (correctRates(sellRUB)/100).toFixed(2)} BYN</div>
                </div>
            </div>
            <div/>
        </div>


    );
}



