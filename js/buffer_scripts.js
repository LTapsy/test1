setUpTable();

function setUpTable(){
    
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

             

//        console.log(this.responseText);
    populateTable(JSON.parse(this.responseText));
//        alert(this.responseText);

    }
      
      

  };
var today = new Date(); 
  xhttp.open("GET", "dashboard/dropdown_read_access.php?t=" + today.getDate() , true);
  xhttp.send();

}

function populateTable(myObj){
    
    myObj.forEach(myFunction);
    
    function myFunction(item, index){
        
        var tableHeads = ["buffer_value"];
    
    var invRow = document.createElement('option');
           
        var invCell = {};
        
        document.getElementById("reff").innerHTML = "";
        
        myObj.forEach(function(item, index){
            
            var childOption = document.createElement("option");
            childOption.setAttribute("value", item.buffer_value);
            childOption.innerHTML = item.buffer_value;
            
            document.getElementById("reff").appendChild(childOption);
        });
        
    }
}