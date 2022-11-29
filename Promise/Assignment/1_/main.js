const myPromise = new Promise((res, rej) => {
  let myData = fetch("file.json")
    .then((data) => data.json())
    .then((data) => {
      data.length = 5;
      res(data);
    });
});
myPromise.then((res) => {
  for (let i = 0; i < res.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${res[i].title}</h3>
    <p>${res[i].description}</p>
    `;
    document.body.appendChild(div);
  }
});
