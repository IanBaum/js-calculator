$(document).ready(function()
  {
    $('#ping-pong-form').submit(function(event)
    {
      event.preventDefalt();
      var goal = $('#goal').val();
      var output = pingPong(goal);
      output.forEach(function(element)
      {
        $('solution').append("<li>" + element + "</li>");
      });
    });
  });
