type PersonListName={
    name:{
        id:number,
        first:string,
        last:string
    }[]
}
export function PersonList(props:PersonListName){
    return (
        <>
        <p>**********Name List***************</p>
        {props.name.map((item)=>{
            return(
                <h2 key={item.id}> {item.first} {item.last}</h2>
            )
        })}
        </>
    )
}