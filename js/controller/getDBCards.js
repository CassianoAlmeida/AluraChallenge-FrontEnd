const getDBCards = async () => {
    const url = 'http://localhost:3000/produtos';
    const data = await fetch(url);
    const produtos = await data.json();
    return produtos;
}

export default getDBCards;