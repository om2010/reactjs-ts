type GreetProps={
    name:string;
    messageCount:number;
    isLoggin:boolean;
}
function greet(props:GreetProps){
    return(
        <>
  
          <h1>
             { props.isLoggin 
             ? `Hello ${props.name}, Your welcome to in my editor. We are total ${props.messageCount} pepople` 
             : 'welcome guest'}
          </h1>
        </>
    )
}
export default greet;