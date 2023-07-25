var v1=document.getElementById("cli");
var ulvar= document.getElementById("ul");
//var tlist=document.getElementById("tasklist");
var but=document.getElementById("but");
var del= document.getElementById("del");
var a = document.getElementsByClassName("a");
//var a = document.getElementsByClassName("b");
var main = document.getElementById("main");


v1.addEventListener("click", function(){
  var task= prompt("Enter item name");
      if(task.length>0){

         var li = document.createElement("li");
         li.classList.add("done");
         li.classList.toggle("done");
         li.appendChild(document.createTextNode(task));
      ulvar.appendChild(li);

     li.addEventListener("click", function(){
         this.classList.toggle("done");
      })

  ///    li.onclick = func;
      }
})

del.addEventListener("click",function(){
   alert("This first list cannot be deleted!!")
   alert("Other lists which you will create by '+' sign can be deleted." )
})

function func(event){
   event.target.parentNode.classList.toggle(done);
}
but.addEventListener("click", function(){
     AddNote()

})

/*var saveNotes= ()=>{
   var notes= document.querySelectorAll(".a");
   var data =[];
   notes.forEach(
      (note) =>{
         data.push(note.value)
      }
   )
   localStorage.setItem("notes", JSON.stringify(data))
}*/

var AddNote=() =>{
   var note = document.createElement("div");
   note.classList.add("a");
      note.innerHTML=`
      <h2><div class='list' id="tasklist">TASK LIST</div></h2>
      <ul id="ul">
      </ul>
      <button class="clickme" id="cli">Add task</button>
      <button class='clickme' id="del">Delete list</button>
      `;
     note.querySelector("#del").addEventListener("click", function(){
      if(confirm("Are you sure to delete the list?")){
      note.remove()
      }
     })
     note.querySelector("#cli").addEventListener("click",function(){
      var task= prompt("Enter item name");
      if(task.length>0){
         var li = document.createElement("li");
         li.classList.add("done");
        li.classList.toggle("done");
         li.appendChild(document.createTextNode(task));
         li.addEventListener("click", function(){
            this.classList.toggle("done");
         })
      note.querySelector("#ul").appendChild(li);
      }
     })
    
      main.appendChild(note);
}

