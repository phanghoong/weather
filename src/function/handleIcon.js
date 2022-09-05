import { IconID } from "../constant/IconConstant";

export default function handleIcon(iconId){

    switch(iconId){
        case IconID['01d']: return calculatePosition(1,0);
        case IconID['01n']: return calculatePosition(2,0);
        case IconID['02d']: return calculatePosition(1,1);
        case IconID['03d']: return calculatePosition(1,2);
        case IconID['03n']: return calculatePosition(1,2);
        case IconID['04d']: return calculatePosition(1,5);
        case IconID['04n']: return calculatePosition(1,5);
        case IconID['09d']: return calculatePosition(4,2);
        case IconID['09n']: return calculatePosition(3,5);
        case IconID['10d']: return calculatePosition(5,2);
        case IconID['10n']: return calculatePosition(4,5);
        case IconID['11d']: return calculatePosition(2,2);
        case IconID['11n']: return calculatePosition(2,5);
        case IconID['13d']: return calculatePosition(2,3);
        case IconID['13n']: return calculatePosition(1,7);
        case IconID['50d']: return calculatePosition(0,2);
        case IconID['50n']: return calculatePosition(0,2);
        default: return calculatePosition(0,0)
    }
}

function calculatePosition(x, y){

    const xWidth = 70
    const yWidth = 75

    return "-" + x*xWidth + "px -" + y* yWidth + "px"
}