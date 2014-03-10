$(document).ready(function(){
  $("table.table-bordered#releases").tablesorter();
});
$(function(){
  $('#delete').click(function(){
    $('.options').css('visibility','visible');
  });
});

$(function(){
  $('#cancel').click(function(){
     $('.options').css('visibility','collapse');
  });
});

$(function(){
  $('#confirm').click(function(){
    var checkedValues = new Array();
    $('td.options input:checkbox:checked').each(function(){
      var a = $(this).closest('td').siblings('td._id')[0];
      checkedValues.push(a.innerHTML);
    });
    alert(checkedValues);
  });
});

