function changeColor(){
    document.body.style.backgroundColor="brown";
}


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=> response.json())
.then(data=>{

    document.getElementById("message").innerText="New Desserts coming soon...."+ data.title;
});


document.getElementById("reservationForm").addEventListener("submit", function(event){

    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;

    if(name==="" || email===""){
        event.preventDefault();

        document.getElementById("error").innerText="Please fill all the above fields.";
    } else{
         event.preventDefault();
         document.getElementById("error").innerText="Table Reserved Succesfully.";
    }
});