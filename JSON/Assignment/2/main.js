const myReq = new XMLHttpRequest;
myReq.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
        console.log(this.responseText);
        alert("Data Loaded");
    }
}
myReq.open('GET','articles.json',true);
myReq.send();