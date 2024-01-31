fetch('https://dummyjson.com/products')
    .then(function (res) {
        return res.json()
    })
    .then(function (result) {

        const data= result.products
        console.log(data)
        for (let i = 0; i < data.length; i++){

            document.write(`

        <div class="card" style="width: 18rem;">
        <img src="${data[i].images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
          f the card's  <p class="card-text">${data[i].descriptions}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
        `)
        }
    })