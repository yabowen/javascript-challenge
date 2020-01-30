var tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) =>{
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) =>{
            var cell = row.append("td");
            cell.text(val);
        });
    }
    );
}

function handleClick() {
    var date = d3.select("#datetime").property("value");
    let filData = tableData;
    if (date) {
        filData = filData.filter(row => row.datetime === date);
    }
    buildTable(filData);
}

d3.selectAll("#filter-btn").on("click",handleClick);
buildTable(tableData)