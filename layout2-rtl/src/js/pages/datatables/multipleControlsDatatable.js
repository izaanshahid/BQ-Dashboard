"use_strict";

var DatatableMultipleControls = (function(){

  var initDatatable1 = function(){
    var table = $('#datatableMultipleControl');

    table.DataTable({
      responsive:true,
      dom:
        "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      
      "language": {
        "paginate": {
          "first": `<i style="transform:rotate(180deg)" class="material-icons">double_arrow</i>`,
          "next": `<i class="material-icons">keyboard_arrow_right</i>`,
          "previous": `<i class="material-icons">keyboard_arrow_left</i>`,
          "last": `<i class="material-icons">double_arrow</i>`
        }
      }

    });    
  }
  return{
    init: function(){
      initDatatable1();
    }
  }

})();

jQuery(document).ready(function() {
	DatatableMultipleControls.init();
});


