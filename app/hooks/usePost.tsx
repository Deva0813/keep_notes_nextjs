import { useMutation, useQueryClient } from 'react-query';

async function insertOne(data:any) {
  const response = await fetch("/v1/action/insertOne", {
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
      document: data.document,
    }),
    redirect: 'follow'
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

function useInsertOne() {
  const queryClient = useQueryClient();

  return useMutation(( data:any) => insertOne(data), {
    onSuccess: () => {
      // Invalidate and refetch data after successful mutation
      queryClient.invalidateQueries('users');
    },

    onError: () => {
      // Invalidate and refetch data after error mutation
      queryClient.invalidateQueries('users');
    }

  });
}

export default useInsertOne;