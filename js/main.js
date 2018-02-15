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
            console.log(response);
            let shows = response.data.Search;
            let output = '';
            $.each(shows, (index, show) => {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${show.Poster}">
                            <h5>${show.Title}</h5>
                            <a onclick="showSelected('${show.imdbID}')" class="btn btn-primary" href="#">Show Details</a>
                        </div>
                    </div>
                `;
            })

            $('#shows').html(output);
        })
        .catch((err) => {
            console.log(err);
        })
}
