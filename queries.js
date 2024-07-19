let query=document.querySelector('#query');


(async function(){
    let response=await fetch('/post');
    let data=await response.json();
    if(!data || data.length === 0){
        query.innerHTML='<h1>No queries as of now</h1>'
    }
    else{
        query.innerHTML='';
        data.forEach((val)=>{
            let div=document.createElement('div');
            div.innerHTML=`<h4>Name: ${val.name}</h4>
            <h4> Roll no: ${val.rollno}</h4><h3>${val.desc}</h3>`;
            query.appendChild(div);
            div.setAttribute('class','query');
            query.classList.remove('query');
            // div.style.backgroundColor='aqua';
            if(val.status==='unsolved'){
                div.innerHTML+=`<form action='post2' method='post' id="ans_form">
                <input style='visibility:hidden' value="${val.rollno}" name='rollno'>
                <div class="ans_div">
                    <label for="idno">
                        Id No
                        <input type="text" name="idno" id="idno" required>
                    </label>
                </div>
                <div class="ans_div">
                    <label for="name">Name
                        <input type="text" name="name" id="name" required>
                    </label>
                </div>
                <div class="ans_div">
                    <label for="ans_desc">Answer description<br>
                       <textarea rows="10" cols="180" id="ans_desc" name="ans_desc" required></textarea>                    
                    </label>

                </div>
                <button type='submit' class="ans_submit">Submit</button>
                </form>`;
            }
            else{
                div.innerHTML+=`<div id="answered"><h4>Id no: ${val.idno}</h4><h4>Name: ${val.teacher_name}</h4><h3>${val.ans_desc}</h3></div>`;
            }
        })
        
    }
})();

