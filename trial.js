$(()=>{
    const inp = $('#inp')
    const btn = $('#btn')
    const city = $('#city')
    const date = $('#date')
    const temp = $('#temp')
    const min = $('#min')
    let url = {
        link:'https://api.openweathermap.org/data/2.5/weather?q=',
        key:'&appid=b21dda7bff40a3bf53c832d142b56682'
    }
    //Get Current Date
    let getDate = ()=>{
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = d.getFullYear() + '/' +
         ((''+month).length<2 ? '0' : '') + month + '/' +
        ((''+day).length<2 ? '0' : '') + day;
        return output
    }
    // Temperature
    let temperature = (tmp)=>{
        tmp = String(tmp - 273.15)
        if(tmp.length >= 4) { tmp = tmp.substr(0, 4) } 
        return tmp
    }


    btn.click(()=>{
        let str = inp.val()
        $.getJSON(url.link+str+url.key,(data)=>{
            let x = data  
            let avgTemp = temperature(x.main.temp)
            let maxminTemp = temperature(x.main.temp_max)+ '°c' + ' / ' +  temperature(x.main.temp_min) + '°c'
            

            
            // let min = x.main.temp
            temp.text(avgTemp + '°c')
            min.text(maxminTemp)
            console.log(x)

            city.text(str)
            date.text(getDate)
        })
    })
    


    
})