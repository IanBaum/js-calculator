var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function()
  {
    $('#ping-pong-form').submit(function(event)
    {
      event.preventDefalt();
      var goal = $('#goal').val();
      var simpleCalculator = new Calculator("liquid gold");
      var output = simpleCalculator.pingPong(goal);
      output.forEach(function(element)
      {
        $('solution').append("<li>" + element + "</li>");
      });
    });
  });
