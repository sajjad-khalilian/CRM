import Card from "../module/Card"

function HomePage({customers}) {
    return (
        <div >
            {
                customers.map(customer => (
                    <Card customer={customer} key={customer._id}/>
                ))
            }
        </div>
    )
}

export default HomePage
