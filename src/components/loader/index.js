import './index.css'
import PropTypes from 'prop-types';

export default function Index({w = '48px', h = '48px', isGreen = false}){
    return (<span className={`loader ${isGreen && `green`}`} style={{width: w, height: h}}></span>);
}

Index.prototype = {
    w: PropTypes.string,
    h: PropTypes.string,
    isGreen: PropTypes.bool
}