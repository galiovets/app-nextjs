export function fetchData() {
  return fetch("http://localhost:3000/api/profile_data")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.users;
    });
}
