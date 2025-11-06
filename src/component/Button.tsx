import type React from "react"

type buttonProps={
handleEvent:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export function Button(props:buttonProps){
    return(
        <>
    <button onClick={props.handleEvent}>
        Click Me
    </button>
        </>
    )
}