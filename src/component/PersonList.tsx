type PersonListName={
    names:{
        id:number,
        first:string,
        last:string
    }[]
}
export function PersonList(props:PersonListName){
    return (
        <>
        <p>**********Name List***************</p>
        {props.names.map((item)=>{
            return(
                <h2 key={item.id}> {item.first} {item.last}</h2>
            )
        })}
        </>
    )
}