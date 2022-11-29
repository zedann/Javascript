window.onload = function(){
const myReq = new XMLHttpRequest;
myReq.onreadystatechange = function(){
console.log(myReq.readyState);

    if(this.readyState == 4 && this.status == 200)
    {
        const mainData = JSON.parse(this.responseText);
        const mainDiv = document.querySelector('#data');
        for(let i = 0 ; i < mainData.length;++i)
        {
            const singleContent = `
            <div>
            <h2>${mainData[i].id}</h2>
            <p>${mainData[i].author}</p>
            <p>${mainData[i].department}</p>
            <p>${mainData[i].title}</p>
            <p>${mainData[i].content}</p>
            </div>
            <hr>
            `;
            mainDiv.innerHTML += singleContent;
        }
    }
}
myReq.open('GET','articles.json',true);
myReq.send();
}