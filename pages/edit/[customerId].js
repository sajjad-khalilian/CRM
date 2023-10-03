import CustomerEditPage from "@/components/templates/CustomerEditPage"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Index() {
    const [data ,setData] = useState(null)


    const router = useRouter()
    const {query: {customerId} , isReady} = router
    console.log(query)




    useEffect(() => {
        if(isReady){
        fetch(`/api/customer/${customerId}`)
        .then(res => res.json())
        .then(data => setData(data.data))
    }
    } , [isReady])
    if(data) return <CustomerEditPage data={data} id={customerId}/>
}

export default Index
