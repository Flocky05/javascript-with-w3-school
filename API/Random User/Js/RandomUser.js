const loadUserFetch = async () => {
  const url = "https://randomuser.me/api/?gender=female";
  try {
    const res = await fetch(url);
    const data = await res.json();
    displalyUser(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};

/* const loadRandomUsers1 = ()=>{
    url="https://randomuser.me/api/?gender=female";
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
} */
const displalyUser = (data) => {
  console.log(data);
};
