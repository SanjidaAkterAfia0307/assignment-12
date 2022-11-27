import { useEffect, useState } from "react"

const useSeller=email=>{
    const [isSeller,setIsSeller]=useState(false)
    const [isSellerLoading,setIsSellerLoading]=useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://assignment-12-server-sanjidaakterafia0307.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                setIsSeller(data)
                setIsSellerLoading(false)
            })
        }
    },[email])
    return [isSeller,isSellerLoading]
}

export default useSeller;