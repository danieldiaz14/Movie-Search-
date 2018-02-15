$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getShows(searchText);
        e.preventDefault();
    });
});

function getShows(searchText) {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=' + searchText + '&page=1')
        .then((response) => {
            //console.log(response);
            let shows = response.data;
            console.log(shows.results[5]);
            let output = '';
            for(let i = 0; i < shows.results.length; i++) {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${"https://image.tmdb.org/t/p/w500" + shows.results[i].poster_path}">
                            <h5>${shows.results[i].name}</h5>
                            <a onclick="showSelected('${shows.results[i].id}')" class="btn btn-primary" href="#">Show Details</a>
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

function getShow() {
    let showId = sessionStorage.getItem('showId');
    axios.get('https://api.themoviedb.org/3/tv/' + showId + '?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US')
        .then((response) => {
            console.log(response);
            let show = response.data;

            let output =`
            <div class="row">
            <div class="col-md-4">
                <img src="${"https://image.tmdb.org/t/p/w500" + show.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
                <h2>${show.name}</h2>
                <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${show.genres[0].name}</li>
                <li class="list-group-item"><strong>Released:</strong> ${show.first_air_date}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${show.vote_average}</li>
                <li class="list-group-item"><strong>Director:</strong> ${show.created_by[0].name}</li>
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