axios.get("https://api.coronadaily.org/covid/location/INDIA").then(handleResponse);

function handleResponse(data){
  populateTable(data.data);
}

function populateTable(data){
  var table= document.querySelector(".main-table")
  var locationResponse= data.locationResponse;

 for(var i=0; i<locationResponse.length;i++){
   var row= document.createElement("tr");

   var cell1= document.createElement("td");
   var cell2= document.createElement("td");
   var cell3= document.createElement("td");
   var cell4= document.createElement("td");
   var cell5= document.createElement("td");


   cell1.innerHTML = locationResponse[i].locationName;

   cell2.innerHTML = locationResponse[i].dataTypeCountMap.TOTAL;

   cell3.innerHTML = locationResponse[i].dataTypeCountMap.ACTIVE;

   cell4.innerHTML = locationResponse[i].dataTypeCountMap.RECOVERED;

   cell5.innerHTML = locationResponse[i].dataTypeCountMap.DEATH;

   row.appendChild(cell1);
   row.appendChild(cell2);
   row.appendChild(cell3);
   row.appendChild(cell4);
   row.appendChild(cell5);

   table.appendChild(row);
 }

}
