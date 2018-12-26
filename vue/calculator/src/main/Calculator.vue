<template>
  <div class="calculator">
    <Display :value="displayValue"/>
    <Button label="AC" @onCalcButtonClick="clearMemory"/>
    <Button label="+/-" @onCalcButtonClick="setOpDifferent"/>
    <Button label="%" @onCalcButtonClick="setOpDifferent"/>
    <Button label="/" operation @onCalcButtonClick="setOperation"/>
    <Button label="7" @onCalcButtonClick="addDigit"/>
    <Button label="8" @onCalcButtonClick="addDigit"/>
    <Button label="9" @onCalcButtonClick="addDigit"/>
    <Button label="*" operation @onCalcButtonClick="setOperation"/>
    <Button label="4" @onCalcButtonClick="addDigit"/>
    <Button label="5" @onCalcButtonClick="addDigit"/>
    <Button label="6" @onCalcButtonClick="addDigit"/>
    <Button label="-" operation @onCalcButtonClick="setOperation"/>
    <Button label="1" @onCalcButtonClick="addDigit"/>
    <Button label="2" @onCalcButtonClick="addDigit"/>
    <Button label="3" @onCalcButtonClick="addDigit"/>
    <Button label="+" operation @onCalcButtonClick="setOperation"/>
    <Button label="0" double @onCalcButtonClick="addDigit"/>
    <Button label="." @onCalcButtonClick="addDigit"/>
    <Button label="=" operation @onCalcButtonClick="setOperation"/>
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";

export default {
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, null],
      current: 0
    };
  },
  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else if (this.current !== 0 && this.values[1] !== null) {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          switch (currentOperation) {
            case "/": {
              this.values[0] = this.values[0] / this.values[1];
              break;
            }
            case "*": {
              this.values[0] = this.values[0] * this.values[1];
              break;
            }
            case "+": {
              this.values[0] = this.values[0] + this.values[1];
              break;
            }
            case "-": {
              this.values[0] = this.values[0] - this.values[1];
              break;
            }
          }
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = null;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      if (n !== ".") {
        const i = this.current;
        const newValue = parseFloat(displayValue);
        this.values[i] = newValue;
      }
    },
    setOpDifferent(operation) {
      if (operation === "%") {
        switch (this.operation) {
          case "*": {
            this.values[1] =
              ((this.values[0] * this.values[1]) / 100).toFixed(2);
              this.displayValue = this.values[1];
            break;
          }
          case "+": {
            this.values[1] = (
              (this.values[0] * this.values[1]) / 100
            ).toFixed(2);
            this.displayValue = this.values[1];
            break;
          }
          case "-": {
            this.values[1] = (
              (this.values[0] * this.values[1]) / 100
            ).toFixed(2);
            this.displayValue = this.values[1];
            break;
          }
        }
      } else {
        if (this.current === 0) {
          this.values[0] = -1 * this.values[0];
          this.displayValue = this.values[0];
        } else {
          this.values[1] = -1 * this.values[1];
          this.displayValue = this.values[1];
        }
      }
    }
  }
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
