initialize('.delete-confirm', function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      $.ajax({
        url: $(this).attr('href'),
        type: 'DELETE',
        success: function() {
          window.location.href = '/releases';
        }
      });
    }
  });
});
