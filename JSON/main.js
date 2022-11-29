// const myJsonFromServer = '{"username":"Zedan","age":20}';
// console.log(myJsonFromServer);
// console.log(typeof myJsonFromServer);
// const data = JSON.parse(myJsonFromServer);
// data["username"]="elzero";
// data["age"]=30;
// console.log(data);

// const myJsonObjToServer = JSON.stringify(data); 
// console.log(myJsonObjToServer);
// console.log(typeof myJsonObjToServer);
//__________________________Ajax__________________________________
    const myReq = new XMLHttpRequest();
    myReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            const data = JSON.parse(this.responseText);
            console.log(data);
            for(let i = 0 ;i<data.length;++i){
                let div = document.createElement('div');
                let repoName = document.createTextNode((i+1)+"-"+data[i].full_name);
                div.appendChild(repoName);
                document.body.appendChild(div);
            }
        }
    }
    myReq.open('GET','https://api.github.com/users/elzerowebschool/repos',true);
    myReq.send();

