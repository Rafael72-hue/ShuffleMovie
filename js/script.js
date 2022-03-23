//CONFIGURATION
const key_api = "f6a3e2b0539af3d109178a074a9de3ba";
const api = "https://api.themoviedb.org/3/movie";
const img_url = "https://image.tmdb.org/t/p/w500";

//VARIABLES TO SET THE DATA
const data = {
    image: document.querySelector("#image"),
    movieTitle: document.querySelector(".movieTitle"),
    movieDescription: document.querySelector(".movieDescription"),
}

//FUNÇÃO QUE RETORNA UM NÙMERO ALEATÓRIO, SENDO USADO COMO ID NO METODO getMovie TRAZENDO UM FILME ALEATORIO

const chooseMovie = () => {
   let movieId = parseInt(Math.random() * 900);
   getMovie(movieId);
}

//CONSULTA NA API DE FILME RETORNANDO OS DADOS QUE APARECEM NA TELA
const getMovie = async (movieId) => {
    if(movieId){
        await fetch(`${api}/${movieId}?api_key=${key_api}`)
        .then(res => res.json())
        .then(data => {
            movieContent(data.poster_path, data.title, data.overview);
        }).catch(err => console.log(err));
    }
}

//POPULA AS TAGS DO HTML COM OS DADOS TRAZIDOS DA API

const movieContent = (srcImage, title, description) => {
    if (srcImage) {
        data.image.setAttribute("src", img_url + srcImage)
        data.image.setAttribute("alt", title)
        data.image.style.display = 'block';
    }

    if (title) {
        data.movieTitle.innerHTML = title;
    }
    
    if (description) {
        data.movieDescription.innerHTML = description;
    }
}