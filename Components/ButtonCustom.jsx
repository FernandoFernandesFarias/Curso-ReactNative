import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonCustom(props) {
    return (
        <Button buttonColor={props.buttonColor} style={styles.button} mode='outlined' onPress={() => props.Click(props.title)}>
            {props.title}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 2,
        flexGrow: 1,
      },
})