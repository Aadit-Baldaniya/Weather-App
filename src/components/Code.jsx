export function promish(city) {
  const aadi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return aadi;
}

export function panding(id) {
  const aadi = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return aadi;
}

export function name(list) {
  return list.filter((value, index) => {
    if (index % 8 == 0) {
      return true;
    }
    return false;
  });
}

export function icon(weather) {
  if (!weather) return "/images/01d.png";
  return `/images/${weather.weather[0].icon.slice(0, 2)}d.png`;
}
export async function storeData() {
  const aai = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await aai.json();
  const date = data.slice(0, 100);
  return date;
  // const url = date.url;
  // const store = [];
  // const aadi = await fetch(url);
  // const dat = await aadi.json();
  // store.push(dat);
  // return store;
}

export function imgh(value) {
  if (!value) {
    return (
      <img
        src="https://www.aljazeera.com/wp-content/uploads/2024/04/2020-07-01T000000Z_1364755301_RC2GKH9ZDZGB_RTRMADP_3_ESTONIA-MILITARY-REAPER-DRONE-1714203121.jpg?resize=1920%2C1440"
        alt=""
      />
    );
  }
  return value.urlToImage;
}
