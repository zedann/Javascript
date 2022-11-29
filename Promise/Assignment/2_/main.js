fetch("file.json")
  .then((data) => data.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = `
      <h3>${data[i].title}</h3>
      <p>${data[i].description}</p>
      `;
      document.body.appendChild(div);
    }
  });
