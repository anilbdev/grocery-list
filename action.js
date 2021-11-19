// Next id for adding a new Product
var nextId = 1;
// ID of Product currently editing
var activeId = 0;

function productDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");

  activeId = $($(cols[0]).children("button")[0]).data("id");
  $("#productname").val($(cols[1]).text());
  $("#introdate").val($(cols[2]).text());
  $("#url").val($(cols[3]).text());

  // Change Update Button Text
  $("#updateButton").text("Update");
}

function productUpdate() {
  if ($("#updateButton").text() == "Update") {
    productUpdateInTable(activeId);
  }
  else {
    productAddToTable();
  }

  // Clear form fields
  formClear();

  // Focus to product name field
  $("#productname").focus();
}

// Add product to <table>
function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
  }

  // Append product to table
  $("#productTable tbody").append(
    productBuildTableRow(nextId));

  // Increment next ID to use
  nextId += 1;
}

// Update product in <table>
function productUpdateInTable(id) {
  // Find Product in <table>
  var row = $("#productTable button[data-id='" + id + "']")
            .parents("tr")[0];

  // Add changed product to table
  $(row).after(productBuildTableRow(id));
  // Remove original product
  $(row).remove();

  // Clear form fields
  formClear();

  // Change Update Button Text
  $("#updateButton").text("Add");
}

// Build a <table> row of Product data
function productBuildTableRow(id) {
  var ret =
  "<tr>" +
    "<td>" +
    "</td>" +
    "<td>" + $("#productname").val() + "</td>" +
    "<td>" + $("#introdate").val() + "</td>" +
    "<td>" + $("#url").val() + "</td>" +
    "<td>" +
      "<button type='button' " +
              "onclick='productDisplay(this);' " +
              "class='btn btn-default' " +
              "data-id='" + id + "'>" +
              "<span class='glyphicon glyphicon-edit' />" +
      "</button>" +

      "<button type='button' " +
              "onclick='productDelete(this);' " +
              "class='btn btn-default' " +
              "data-id='" + id + "'>" +
              "<span class='glyphicon glyphicon-remove' />" +
      "</button>" +
    "</td>" +
  "</tr>"

  return ret;
}

// Delete product from <table>
function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}

// Clear form fields
function formClear() {
  $("#productname").val("");
  $("#introdate").val("");
  $("#url").val("");
}