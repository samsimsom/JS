console.log("--- forecast ---");

const key = "hAOrGDjP494GWC5spRbvqQ6CvzSBlVT3";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const responce = await fetch(base + query);
  const data = await responce.json();

  return data[0];
};

getCity("ankara")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
