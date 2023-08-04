async function getAll(data: any) {
    const response = await fetch("/v1/action/find", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": process.env.API_KEY as string,
            "Accept": "application/json",
        },
        body: JSON.stringify({
            dataSource: process.env.DATASOURCE as string,
            database: process.env.DATABASE as string,
            collection: data.collection,
        }),
        redirect: 'follow'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

async function getByFilter(data: any) {
    const response = await fetch("/v1/action/findOne", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": process.env.API_KEY as string,
            "Accept": "application/json",
        },
        body: JSON.stringify({
            dataSource: process.env.DATASOURCE as string,
            database: process.env.DATABASE as string,
            collection: data.collection,
            filter : data.filter,
            projection: data.projection
        }),
        redirect: 'follow'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export { getAll, getByFilter};