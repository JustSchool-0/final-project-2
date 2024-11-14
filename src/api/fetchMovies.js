function wrapPromise(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );

    return {
        read() {
            if (status === 'pending') throw suspender;
            if (status === 'error') throw result;
            return result;
        },
    };
}

function fetchMovies() {
    const moviesPromise = fetch('http://localhost:3000/movies')
        .then((response) => {
            if (!response.ok)
                throw new Error('Network response was not ok');
            return response.json();
        });

    return wrapPromise(moviesPromise);
}

export default fetchMovies;