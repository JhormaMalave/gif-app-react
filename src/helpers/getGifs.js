const getGifs = async (category) => {
    const apiKey = '9EPL9flKppv6xPCLzBOt9oAmacqcNipN';
    const limit = '10';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${encodeURI( category )}`;

    const peticion = await fetch(url);
    const {data} = await peticion.json();

    const gifs = data.map( gif => (
        {
            id: gif.id,
            title: gif.title,
            image: gif.images.downsized_medium.url
        }
    ));
    return gifs;
}

export {getGifs}