window.addEventListener('load', function () {


    fetch('https://api.giphy.com/v1/gifs/trending?api_key=PgqWE4DbY3Xl4kxvnQbCZt2vjiUESXxe&limit=25&rating=g')
        .then(res => {
            return res.json()
        })

        .then(info => {

            let cantidad = prompt('¿Cuántos GIF deseas ver?')
            console.log(info)
            for (let i = 0; i < cantidad; i++) {
                let gif = '<p>' + info.data[i].title + '</p>';
                gif += '<img src="' + info.data[i].images.original.url + '">'

                document.querySelector('ul').innerHTML += '<li>' + gif + '</li>'
            }
        })







})