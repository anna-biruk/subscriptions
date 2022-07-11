import {getSubscriptionItems} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const SubscriptionList = ()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSubscriptionItems())
    }, [dispatch])
     return(
         <>
             
         </>
     )

}

export default SubscriptionList