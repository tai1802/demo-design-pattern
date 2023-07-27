function Command(operation) {
  this.operation = operation;
}

Command.prototype.execute = function () {
  this.operation.execute()
}

function ProccessPaypalPayment() {
  return {
    execute: function () {
      console.log("Payment with Paypal");
    }
  }
}

function ProccessCreditCardPayment() {
  return {
    execute: function () {
      console.log("Payment with Credit Card");
    }
  }
}

function PaymentHandler() {
  let paymentCommand;

  return {
    setPaymentCommand(command) {
      this.paymentCommand = command;
    },

    executeCommand() {
      this.paymentCommand.execute();
    }
  }
}

function main() {
  let systemPayment = new PaymentHandler();

  systemPayment.setPaymentCommand(new Command(new ProccessPaypalPayment));
  systemPayment.executeCommand();
}

main()