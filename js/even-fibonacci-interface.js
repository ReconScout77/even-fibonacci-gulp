var EvenFibonacci = require("./../js/even-fibonacci.js").evenFibonacciModule;

$(function() {
  $('#fibonacciMax').submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#fibonacciMax").val());

    var fibonacci = new evenFibonacci(input);

    $("output").text(fibonacci.evenFibonacciSequence());
  });
});
