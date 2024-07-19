let query=document.querySelector('#query');


(async function(){
    let response=await fetch('/event_json');
    let data=await response.json();
    if(!data || data.length === 0){
        query.innerHTML='<h1>No events as of now</h1>'
    }
    else{
        query.innerHTML='';
        data.forEach((val)=>{
            let div=document.createElement('div');
            div.innerHTML=`<h4>Date: ${val.date}</h4>
            <h4>Name: ${val.name}</h4><h4>Time: ${val.time}</h4><h3>Description: ${val.desc}</h3>`;
            query.appendChild(div);
            div.setAttribute('class','query');
            query.classList.remove('query');
            
            
        })
        
    }
})();

