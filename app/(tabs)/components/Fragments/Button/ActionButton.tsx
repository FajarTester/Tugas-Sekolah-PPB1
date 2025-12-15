import { Text, TouchableOpacity } from "react-native"

type Action = {
    onPress: any
    text: string
    button: any
    color: any
}


export const ActionButton = ({ onPress, text, button, color }: Action) => {
    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <Text style={color}>{text}</Text>
        </TouchableOpacity>
    )
}