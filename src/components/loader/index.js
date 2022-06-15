import './index.css'

export default function Index({w = '48px', h = '48px'}){
    return (<span className="loader" style={{width: w, height: h}}></span>);
}