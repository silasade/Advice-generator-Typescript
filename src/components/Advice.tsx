import { useEffect, useState } from "react"
import dice from "./images/icon-dice.svg"
import divider from "./images/pattern-divider-mobile.svg"
import Loading from "./Loading"
type AdviceProp={
    id:number |undefined
    advice: string |undefined
    handleclick:()=>void
}
const Advice=({id, advice, handleclick}:AdviceProp)=>{
    const [showLoading, setShowLoading] = useState<boolean>(true);

    useEffect(() => {
        setShowLoading(true);
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [handleclick]);
    return(
        <div className="advice">
            {
            (typeof advice==="undefined" || showLoading)?
            (<Loading/>)
            :
            (<>
            <div><h4>{`ADVICE # ${id}`}</h4></div>
            
            <div><h3>{`"${advice}"`}</h3></div>
            
            <div><img src={divider} className="divider" alt="divider"/></div>
            <div><img className="dice" onClick={handleclick} src={dice} alt="divider"/></div>
            </>)
            }
        </div>
    )
}
export default Advice