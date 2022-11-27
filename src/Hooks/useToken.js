import { useEffect, useState } from "react"

const useToken=email=>{
    const [token,setToken]=useState('')

    useEffect(()=>{
       if(email){
        fetch(`https://assignment-12-server-sanjidaakterafia0307.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.bookToken){
                localStorage.setItem("bookToken",data.bookToken)
                setToken(data.bookToken)
            }
        })
       }
    },[email])
    return [token];
}

export default useToken;