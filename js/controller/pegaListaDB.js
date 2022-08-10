const db = fetch('http://localhost:3000/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
})

export default db;