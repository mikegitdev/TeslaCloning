import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from './styles'

const StyledButton = (props) => {


    // const  type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    const {type, content, onPress }  = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? 'white' : 'black';
    return (
        <View style={styles.container}>
        {/*    <TouchableOpacity  style={styles.button} onPress={() => {console.warn( 'pressable iwlavotti')}}>*/}
        {/*        <Text style={styles.text}>Custom Order</Text>*/}
        {/*</TouchableOpacity >*/}
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>

        </View>
    );
};

export default StyledButton;
