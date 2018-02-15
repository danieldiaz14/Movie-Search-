$(document).ready(() => {
    getPopular();
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getShows(searchText);
        e.preventDefault();
    });
});

function getPopular() {
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
        .then((response) => {
            let shows = response.data.results;
            let output = '';
            for(let i = 0; i < shows.length; i++) {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${"https://image.tmdb.org/t/p/w500" + shows[i].poster_path}">
                            <h5>${shows[i].name}</h5>
                            <a onclick="showSelected('${shows[i].id}')" class="btn btn-primary" href="#">Show Details</a>
                        </div>
                    </div>
                `;
            }
            $('#shows').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function getShows(searchText) {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=' + searchText + '&page=1')
        .then((response) => {
            //console.log(response);
            let shows = response.data.results;
            console.log(shows);
            let output = '';
            for(let i = 0; i < shows.length; i++) {
                console.log(shows[i].poster_path);
                let imageAddress = checkImage(shows[i].poster_path);
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${imageAddress}">
                            <h5>${shows[i].name}</h5>
                            <a onclick="showSelected('${shows[i].id}')" class="btn btn-primary" href="#">Show Details</a>
                        </div>
                    </div>
                `;
            }
            $('#shows').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function showSelected(id) {
    sessionStorage.setItem('showId', id);
    window.location = 'show.html';
    return false;
}

function checkImage(input) {
    if(input === null) {
        return './placholder1.jpg';
    } else {
        return "https://image.tmdb.org/t/p/w500" + input;
    }
}

function check(input) {
    if (input.length <= 0) {
        return 'Information was not provided';
    }
    return input[0].name;
}

function getShow() {
    let showId = sessionStorage.getItem('showId');
    axios.get('https://api.themoviedb.org/3/tv/' + showId + '?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US')
        .then((response) => {
            console.log(response);
            let show = response.data;
            let genre = check(show.genres);
            let createdby = check(show.created_by);
            let output =`
            <div class="row">
            <div class="col-md-4">
                <img src="${"https://image.tmdb.org/t/p/w500" + show.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
                <h2>${show.name}</h2>
                <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${show.first_air_date}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${show.vote_average}</li>
                <li class="list-group-item"><strong>Director:</strong> ${createdby}</li>
                <li class="list-group-item"><strong>Seasons:</strong> ${show.seasons.length}</li>
                <li class="list-group-item"><strong>Last Air Date:</strong> ${show.last_air_date}</li>
                </ul>
            </div>
            </div>
            <div class="row">
            <div class="well">
                <h3>OverView</h3>
                ${show.overview}
                <hr>
                <a href="index.html" class="btn btn-default">Go Back To Search</a>
            </div>
            </div>
            `;

            $('#show').html(output);
        })
        .catch((err) => {
            console.log(err);
        })
}