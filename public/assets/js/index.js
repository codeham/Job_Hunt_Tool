$(function() {
  /**
   * Data table
   */
  let tableData = [];
  $("#dataTable").DataTable({
    ajax: {
      url: "/display-table",
      dataSrc: json => {
        console.log("JSON call...");
        console.log(typeof json);
        for (let i = 0; i < json.length; i++) {
          json[i].posting_date = dateConversion(json[i].posting_date);
          json[i].job_status = determineStatus(json[i].job_status);
          tableData.push(json[i]);
        }
        console.log(tableData);
        return tableData;
      }
    },
    data: tableData,
    columns: [
      { data: "company" },
      { data: "role" },
      { data: "city" },
      { data: "state" },
      { data: "country" },
      { data: "job_platform" },
      { data: "posting_date" },
      { data: "job_status" },
      {
        defaultContent:
          '<button type="button" class="btn btn-dark btn-sm" data-toggle="modal" data-target="#myModal">' +
          '<i class="far fa-folder-open fa-lg"></i></button>'
      }
    ]
  });

  /**
   * determines which badge to display in status column
   * @param {} status
   */
  function determineStatus(status) {
    if (status == "In-Progress") {
      return '<span class="badge badge-success">In Progress</span>';
    } else if (status == "Denied") {
      return '<span class="badge badge-danger">Denied</span>';
    } else {
      return '<span class="badge badge-info">Applied</span>';
    }
  }

  /**
   * date format converter
   * format: mm/dd/yy
   * @param {} date
   */
  function dateConversion(date) {
    let d = new Date(date);
    console.log(d);
    var choppedYear = d
      .getFullYear()
      .toString()
      .substr(-2);
    return d.getMonth() + 1 + "/" + d.getDate() + "/" + choppedYear;
  }
});
