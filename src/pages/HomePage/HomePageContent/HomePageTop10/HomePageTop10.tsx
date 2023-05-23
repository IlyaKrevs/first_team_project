import React from 'react';
import Carousel from '../../../../Components/aKrevs/Carousel/Carousel';
import Top10Item from '../../../../Components/aKrevs/Top10Item/Top10Item';

import orangeCow from '../../../../assets/img/orange_cow.jpg';

import number1 from '../../../../assets/img/top10/number1.svg';
import number2 from '../../../../assets/img/top10/number2.svg';
import number3 from '../../../../assets/img/top10/number3.svg';
import number4 from '../../../../assets/img/top10/number4.svg';
import number5 from '../../../../assets/img/top10/number5.svg';
import number6 from '../../../../assets/img/top10/number6.svg';
import number7 from '../../../../assets/img/top10/number7.svg';
import number8 from '../../../../assets/img/top10/number8.svg';
import number9 from '../../../../assets/img/top10/number9.svg';
import number0 from '../../../../assets/img/top10/number0.svg';




const HomePageTop10 = () => {

    let imageArr = [orangeCow, orangeCow, orangeCow, orangeCow, orangeCow, orangeCow, orangeCow, orangeCow, orangeCow, orangeCow]

    let numberArr = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number0]


    function createTop10ItemsObject() {
        let myTemp = null;
        let myNumber;
        let myArr = [];


        for (let i = 0; i < imageArr.length; i++) {
            myNumber = numberArr[i];
            if (i === (imageArr.length - 1)) {
                myTemp = number0;
                myNumber = number1;
            };

            myArr.push({
                image: imageArr[i],
                firstNumber: myNumber,
                secondNumber: myTemp,
            })
        }

        return myArr;
    }

    function make10items() {

        let myArr: React.ReactNode[] = [];

        createTop10ItemsObject().map(item => {
            myArr.push(<Top10Item image={item.image} firstNumber={item.firstNumber} secondNumber={item.secondNumber} />)
        })

        return myArr;
    }


    return (
        <div>
            <Carousel type='top10'>
                {make10items()}
            </Carousel>
        </div>
    );
};

export default HomePageTop10;