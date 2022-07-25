export async function fetchData() {
  const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

  return fetch(`${API_HOST}/profile_data`)
    .then((res) => res.json())
    .then((data) => {
      return data.users;
    });
}
