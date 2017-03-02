'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },

    displayText: {
        color: '#DDDDDD',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: '#434343'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },


    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    containerMiddleTwo: {
      flex: 1,
      backgroundColor: '#636363',
    },
    containerMiddleOne: {
      flex: 3,
      backgroundColor: '#434343',
    },
});

export default Style;
