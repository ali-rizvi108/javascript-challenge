var tableData = data;

var tbody = d3.select("tbody");
function createTable(data){
    tbody.html("");
    data.forEach((row)=>{
    var dataRow = tbody.append("tr");
    Object.values(row).forEach((values)=>{
    var cells = dataRow.append("td");
    cells.text(values);
    });
   
    });
}

createTable(tableData);

function dateFilter(){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    filterData = filterData.filter(dataRow=>dataRow.datetime==date);

createTable(filterData);
}
d3.selectAll("#filter-btn").on("click",dateFilter);
