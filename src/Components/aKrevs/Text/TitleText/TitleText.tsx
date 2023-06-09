import React from 'react';
import classes from './TitleText.module.css'

interface TitleTextProps {
    text: string,
    type: 'big' | 'medium' | 'small' | 'moviePage',
}



const TitleText = ({ text, type }: TitleTextProps) => {

    let myType;

    if (type === 'big') {
        myType = classes.typeBig
    } else if (type === 'medium') {
        myType = classes.typeMedium
    } else if (type === 'small') {
        myType = classes.typeSmall
    } else if (type === 'moviePage') {
        myType = classes.moviePage
    }

    return (
        <div className={myType}>
            {text}
        </div>
    );
};

export default TitleText;