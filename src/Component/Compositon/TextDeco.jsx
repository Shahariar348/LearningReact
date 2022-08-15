

export default function TextDecoratore({addemoji,addbreacket}){
      
    let text=" I have a Ford and It's Awesome Car. "
    
    if(addbreacket){
       text=addbreacket(text)
    }
    if(addemoji){
      text = addemoji(text,"🚓")
    }
    else{
      text
    }
    return (
        <h3>
          {text}
        </h3>
    )
}
