async function updateOne(data: any) {
    const response = await fetch("/v1/action/updateOne", {
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
            filter: data.filter,
            update: data.update,
        }),
        redirect: 'follow'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

async function updateMany(data: any) {

    const response = await fetch("/v1/action/updateMany", {
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
            filter: data.filter,
            update: data.update,
        }),
        redirect: 'follow'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export { updateOne, updateMany};