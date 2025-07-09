import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/COLORS'
import { FontSize } from '../constants/Font'

const MainButton = ({children, buttonName, onPress, buttonStyle, textStyle }) => {
  return (
    <View>
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{buttonName}</Text>
            {children}
        </TouchableOpacity>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: COLORS.mainButtonColor,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FontSize.buttonText,
        fontWeight: '600',
    },
})