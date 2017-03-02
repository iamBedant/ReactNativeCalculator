'use strict';

import React, { Component } from 'react';
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class DigitButton extends Component {

    // render() {
    //     return (
    //         <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
    //                             underlayColor="#193441"
    //                             onPress={this.props.onPress}>
    //             <Text style={Style.inputButtonText}>{this.props.value}</Text>
    //         </TouchableHighlight>
    //     )
    // }

    render(){
      return (
          <TouchableNativeFeedback
              onPress={this.props.onPress}
              background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={Style.inputButton}>
                     <Text style={Style.inputButtonText}>{this.props.value}</Text>
                </View>
          </TouchableNativeFeedback>
        )
    }

}
