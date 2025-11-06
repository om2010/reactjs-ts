import type React from "react"

type inputProps={
 value:string,
 changHadle:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export function Input(props:inputProps){
    return(
        <>
        <input type="text" value={props.value} onChange={props.changHadle}/>
        </>
    )
}