import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1B2565',
        color: theme.colors.heading,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    }
});