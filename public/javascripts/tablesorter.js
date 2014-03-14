initialize('table#releases', function() {
  $("table.table-bordered#releases").tablesorter();

  $('#delete').click(function(){
    $('.options').css('visibility','visible');
  });

  $('#cancel').click(function(){
     $('.options').css('visibility','collapse');
  });

  $('#confirm').click(function(){
    var checkedValues = new Array();
    $('td.options input:checkbox:checked').each(function(){
      var a = $(this).closest('td').siblings('td._id')[0];
      checkedValues.push(a.innerHTML);
    });
    alert(checkedValues);
  });
});
