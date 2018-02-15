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
