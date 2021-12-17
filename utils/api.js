const URL = "https://virtserver.swaggerhub.com";

export const getData = () => {
  return fetch(URL + "/hqms/FDN-WP/0.1/wp")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
