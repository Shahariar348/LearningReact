
export  function ToCelsius(temperature){
    return (temperature-32)*5/9
}

export  function  ToFahrenheit(temperature){
    return (temperature *9/5)+32
}

export  function ToConvert(ToFind,temperature){
    let tem =parseFloat(temperature)
    if (Number.isNaN(tem)) {
        return '';
      }
     let convert=ToFind(tem)
     let converRound =Math.round(convert*1000)/1000
     return converRound.toString()
}


