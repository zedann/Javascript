const myReq = new XMLHttpRequest;
myReq.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
        const mainData = JSON.parse(this.responseText);
        for(let i = 0 ; i < mainData.length;++i)
        {
            mainData[i].department = "all";
        }
        console.log(mainData);
        const updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}
myReq.open('GET','articles.json',true);
myReq.send();