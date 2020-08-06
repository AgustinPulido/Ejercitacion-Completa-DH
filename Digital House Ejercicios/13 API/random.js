window.onload = () => {
    console.log('DOM cargado')

    const random = 'https://api.giphy.com/v1/gifs/random?api_key=PgqWE4DbY3Xl4kxvnQbCZt2vjiUESXxe&tag=&rating=g'
    const trending = 'https://api.giphy.com/v1/gifs/trending?api_key=PgqWE4DbY3Xl4kxvnQbCZt2vjiUESXxe&limit=25&rating=g';

    // .then(response => {
    //     console.log(response.headers.get('Content-Type'))
    //     for (const [key, value] of response.headers)
    //     console.log(key, value)

    //     return response.json()
    // })

    // .then(data => console.log(data))
    // .catch(err => console.log(err.message))

    fetch(random)
        .then(response => {
            console.log(response)
            return response.json()
        })

        .then(dataDecode => {
            console.log(dataDecode)
            let giphName = dataDecode.data.title;
            let giphURL = dataDecode.data.images.original.url
            console.log(giphURL)
            titulo = document.querySelector('h1').innerHTML = giphName || "Gif Sin Titulo";
            imagen = document.getElementById("random-gif").setAttribute("src", giphURL)


        })

    let btn = document.querySelector('button')
    btn.addEventListener('click', () => {
            fetch(random)
                .then(res => {
                    console.log(res)
                    return res.json()
                })

                .then(data => {
                    let giphName2 = data.data.title;
                    let giphURL2 = data.data.images.original.url
                    titulo = document.querySelector('h1').innerHTML = giphName2 || "Gif Sin Titulo";
                    imagen = document.getElementById("random-gif").setAttribute("src", giphURL2)

                })
        })

        .catch(err => console.log(err))
}