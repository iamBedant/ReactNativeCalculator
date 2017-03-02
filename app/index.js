'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './components/DigitButton';


export default class Dictionary extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            inputString :'',
            result:'',
            selectedSymbol: null
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputString}</Text>
                    <Text style={Style.displayTextResult}>{this.state.result}</Text>
                </View>
                <View style={Style.inputContainer}>
                  <View style={Style.containerMiddleOne}>
                      {this._renderInputButtons()}
                  </View>
                  <View style={Style.containerMiddleTwo}>
                      {this._renderInputOperations()}
                  </View>
                </View>
            </View>
        );
    }

    _renderInputButtons() {

        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

    _renderInputOperations() {

        let views = inputOperations.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

    _onInputButtonPressed(input) {
      this.setState({
          inputString: this.state.inputString +input
      });
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input);
            default:
                return this._handleStringInput(input);
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        });
    }


    _calculateResult(){
      let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

      if (!symbol) {
          return;
      }

      this.setState({
          previousInputValue: 0,

          inputString : eval(previousInputValue + symbol + inputValue),
          inputValue: eval(previousInputValue + symbol + inputValue),
          result :eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
      });
    }

    _handleStringInput(str) {

      this.setState({
          result: ''
      });
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;

            case '=':
                this._calculateResult();
                break;

            case 'DEL':
                this.setState(this.initialState);
                    break;

            // case 'c':
            //     this.setState({inputValue: 0});
            //     break;

        }
    }

}



const inputButtons = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ['.',0, '=']
];

const inputOperations = [
    ['DEL'],
    ['/'],
    ['*'],
    ['-'],
    ['+']
];
