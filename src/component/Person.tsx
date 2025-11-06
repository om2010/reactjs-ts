type personName={
    name:{
        firstName:string;
    lastName:string
    }
}
function Person(props:personName){
    return(
        <>
        <p>**********Name***************</p>
        <h2>
            {props.name.firstName} {props.name.lastName}
        </h2>
        </>
    )
}
export default Person;