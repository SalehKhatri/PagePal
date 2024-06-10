export const getBooks = async (q) => {
  const url =
    `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`;
  try {
    let response = await fetch(url)
    if(response.status === 200) {
      response = await response.json()
      return response;
    }
    if(response.status === 404) {
      return response.status
    }
    else{
      console.log("An error occurred",response);
    }
    
  } catch (err) {
    return err;
  }
};
