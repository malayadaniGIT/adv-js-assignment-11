window.addEventListener('load',()=>{
    const form =document.querySelector("#form_search")
    const name =document.querySelector("#name")
    const last =document.querySelector("#last")
    const country =document.querySelector("#country")
    const score =document.querySelector("#score")
    const list_el =document.querySelector("#task")


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task=name.value;
        const task1=last.value;
        const task2=country.value;
        const task3=score.value;


        if(!task){
            alert("please add task");
            return;
        }
        if(!task1){
            alert("please add task");
            return;
        }
        if(!task2){
            alert("please add task");
            return;
        }
        if(!task3){
            alert("please add task");
            return;
        }
        const task_el= document.createElement("div");
        task_el.classList.add("task");
        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        const task_last_el=document.createElement("div");
        task_last_el.classList.add("last");
        const task_country_el=document.createElement("div");
        task_country_el.classList.add("country");
        const task_score_el=document.createElement("div");
        task_score_el.classList.add("score");
        


    



      task_el.appendChild(task_content_el);
      task_el.appendChild(task_last_el);
      task_el.appendChild(task_country_el);
      task_el.appendChild(task_score_el);

      const task_input_el=document.createElement("input");
      task_input_el.classList.add("name")
      const task_last_input=document.createElement("input");
      task_last_input.classList.add("last1");
      const task_country_input=document.createElement("input");
      task_country_input.classList.add("country2")
      const task_score_input=document.createElement("input");
      task_score_input.classList.add("score1");

      
      task_input_el.value= task;
      task_last_input.value=task1;
      task_country_input.value= task2;
      task_score_input.value=task3;

     
      task_input_el.setAttribute("readonly","readonly");
      task_content_el.appendChild(task_input_el);
      task_last_input.setAttribute("readonly","readonly");
      task_last_el.appendChild(task_last_input);
      task_country_input.setAttribute("readonly","readonly");
     task_country_el.appendChild(task_country_input);
      task_score_input.setAttribute("readonly","readonly");
      task_score_el.appendChild(task_score_input);

      const action_el=document.createElement("div");
      action_el.classList.add("action")

      task_el.appendChild(action_el);

      const delete_btn=document.createElement("button");
      delete_btn.classList.add("btn2");
      delete_btn.innerHTML='<i class= " fa-regular fa-trash-can"></i>';
      
      
      const delete_btn2=document.createElement("button");
      delete_btn2.classList.add("btn3");
      delete_btn2.innerHTML="+5";
      
      const delete_btn3=document.createElement("button");
      delete_btn3.classList.add("btn4");
      delete_btn3.innerHTML="-5";


      action_el.appendChild(delete_btn)
      action_el.appendChild(delete_btn2);
      action_el.appendChild(delete_btn3);

      


     const date_el=document.createElement("div");
      date_el.classList.add("footer");

      const p_tag=document.createElement('p');
      p_tag.innerHTML="";

      date_el.appendChild(p_tag);
      


      task_el.appendChild(date_el);




      



      list_el.appendChild(task_el);

        

        
        
       delete_btn.addEventListener('click',() =>{
       task_el.remove();
    

       });

    })
    
    
    
   
})