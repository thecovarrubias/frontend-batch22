const fetchMovies = async () => {
    try {
        const response = await fetch('https://backend-batch22.herokuapp.com/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

fetchMovies()
    .then((data) => {
        const { diaries } = data;
        let entries = document.querySelector('#entries');
        let contentEntries = '';

        diaries.forEach(element => {
            contentEntries += `
                <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                    <div class="card text-justify">
                        <div class="card-header bg-primary text-white">${ element.date }</div>
                        <img src="${ element.url_image }" class="card-img-top" alt="${ element.feel }">
                        <div class="card-body">
                        <h5 class="card-title">${ element.feel }</h5>
                        <p class="card-text">${ element.description }</p>
                        <p class="card-text"><small class="text-muted">${ element.timestamp }</small></p>
                        </div>
                    </div>
                </div>`;
        });

        entries.innerHTML = contentEntries;
    })
    .catch(error => console.log(error));
