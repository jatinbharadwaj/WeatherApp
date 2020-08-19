
// API key b21dda7bff40a3bf53c832d142b56682
// Endpoint:
// - Please, use the endpoint api.openweathermap.org for your API calls
// - Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b21dda7bff40a3bf53c832d142b56682

// Useful links:
// - API documentation https://openweathermap.org/api
// - Details of your plan https://openweathermap.org/price
const https = require('https')
// let inp = $('#Searchbox')
// let btn = $('#btn')

let url = {
    link:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'&appid=b21dda7bff40a3bf53c832d142b56682'
}
let state = 'delhi'
const request = https.get(url.link+state+url.key,(response)=>{
   
    let x = ""
    response.on('data',(data)=>{
        // console.log(data)
        x+=data.toString()
    })
    response.on('end',()=>{
        console.log(x)
        let data = JSON.parse(x)
        console.log(data.main.temp)
        console.log("done!")
    })
    
})


// btn.click(()=>{
//     let str = inp.val()
//     console.log(str)
// })

// function toggleInputButtons(){
//     btn.prop('disabled',inp.val()=='')
// }

// inp.on('input',toggleInputButtons)