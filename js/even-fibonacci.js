function evenFibonacci(input){
  this.inputNum = input;
}

evenFibonacci.prototype.evenFibonacciSequence = function() {

  var numberBefore = 0;
  var countingNumber = 1;
  var sequence = [];

  while (countingNumber <= this.inputNum) {
    var temp = countingNumber;
    countingNumber += numberBefore;
    if ((countingNumber % 2) === 0) {
      sequence.push(countingNumber);
    }
    numberBefore = temp;
  }
  return this.addSequence(sequence);
};

evenFibonacci.prototype.addSequence = function(sequence) {
  var sequenceSum = 0;
  for(var i = 0; i < sequence.length; i++) {
    sequenceSum += sequence[i];
  }
  return sequenceSum;
};

exports.evenFibonacciModule = evenFibonacci;
