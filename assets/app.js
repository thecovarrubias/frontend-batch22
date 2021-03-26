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
                    <div class="card-header bg-primary text-white d-flex justify-content-end">
                        <small>
                            ${ moment(element.date).format('MMMM Do, YYYY') }
                        </small>
                    </div>
                    <img src="${ element.url_image }" class="card-img-top rounded-0" alt="${ element.feel }">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${ element.feel }
                        </h5>
                        <p class="card-text">
                            ${ element.description }
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                ${ moment(element.timestamp).format('dddd') }
                            </small>
                        </p>
                    </div>
                </div>
            </div>`;
    });

    entries.innerHTML = contentEntries;
})
.catch(error => console.log(error));

moment.lang('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});