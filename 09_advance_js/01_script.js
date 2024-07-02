const btn=document.getElementById('fetchDetails');
const myUrl='https://api.github.com/users/captainjacksparrow007';
const xhr=new XMLHttpRequest();
xhr.open('GET',myUrl);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText);
        console.log(data.followers);
        // console.log(this.responseText);
        console.log(data.avatar_url);
        btn.addEventListener('click',(e)=>{
            const div=document.createElement('div');
            const imgtag=document.createElement('img');
            imgtag.src=data.avatar_url;
            imgtag.className='avtarImg';
            div.className="card-items";
            div.style.display="flex";
            div.style.justifyContent="center";
            div.style.alignItems="center";
            div.style.flexDirection="column";
            div.style.gap='0.5rem';
            imgtag.style.width='200px';
            imgtag.style.height='200px';
            div.appendChild(document.createTextNode(`Followers = ${data.followers}`));
            document.querySelector('.card').appendChild(div);
            document.querySelector(".card-items").appendChild(imgtag);
        })
    }
}
xhr.send();