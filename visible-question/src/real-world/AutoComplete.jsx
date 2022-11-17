// (1) add the country code input.
// (2) use GraphQL to query country emoji from https://countries.trevorblades.com/
// (3) autocomplete when input some words
const GRAPHQL_URL = 'https://countries.trevorblades.com/graphql';
const query = async (data) => {
    const payload = JSON.stringify({
      query: `{country(code:"${data}"){emoji,code,name}}`
    });
   // const payload = JSON.stringify({
   //   query: `{countries{emoji,code,name}}`
   // });
   const response = await fetch(GRAPHQL_URL, {
     method: 'POST',
     headers: {
       'Content-type': 'application/json'
     },
     body: payload
   });
   try {
     const res = await response.json();
     return {
       ret: response.status,
       data: res.data
     };
   } catch (error) {
     return {
       ret: response.status,
       data: []
     };
   }
 };
export default () => {
    return <div> autocomplte</div>
}