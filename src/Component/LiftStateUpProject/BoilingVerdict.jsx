
export default function BoilingVerdict ({temperature}){
   
    return (
        <div>
           {
            temperature >= 100 ? <h4>The water would boil.</h4>:
             <h4>The water would not boil</h4>
           } 
        </div>
    ) 
}