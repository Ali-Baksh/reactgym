export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
     'X-RapidAPI-Key': "9a5f36b76emsh0ea4658a939a751p10ce59jsncfe494ca204d",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a5f36b76emsh0ea4658a939a751p10ce59jsncfe494ca204d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
    

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}