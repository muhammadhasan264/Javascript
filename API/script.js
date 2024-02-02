// fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=3b85fd603c697180b32a31dd4c51e4d0')
//     .then(function (res) {
//         return res.json()
//     })
//     .then(function (result) {

        
//         console.log(result)
//     })

    function gettemp(){
        const getval= document.getElementById("temp").value;
        console.log(getval)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getval}&appid=3b85fd603c697180b32a31dd4c51e4d0&units=metric`)
        .then(function (res) {
            return res.json()
        })
        .then(function (result) {
    
            
            console.log(result.main.temp)
            document.getElementById("head").innerHTML= result.main.temp
        })

    }