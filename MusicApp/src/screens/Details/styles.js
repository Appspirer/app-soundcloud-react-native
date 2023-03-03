import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.orange
    },
    content: {
        marginTop: 50,
        backgroundColor: Colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flex: 1,
        padding: 32
    },
    bg: {
        width: width - 64,
        height: width - 64,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black_text
    },
    artist: {
        fontSize: 16,
        color: Colors.orange,
        fontStyle: 'italic',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: '500'
    },
    line_gray: {
        height: 2,
        width: width - 64,
        backgroundColor: Colors.border,
    },
    bottom_content: {
        marginTop: height * 0.05,
        width: width - 64,
        alignSelf: 'center',
        flex: 1,
    },
    line_orange: {
        height: 2,
        backgroundColor: Colors.orange,
    },
    dot: {
        height: 6,
        width: 6,
        borderRadius: 3,
        backgroundColor: Colors.orange,
        marginTop: -4,
    },
    duration_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    duration: {
        fontSize: 10,
        color: Colors.black_text,
        fontStyle: 'italic',
        fontWeight: '500'
    },
    action_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    adv: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.gray_bg,
        width: width
    },
    adv_container: {
        backgroundColor: Colors.gray_button,
        padding: 4,
        borderBottomRightRadius: 7,
        width: 15
    },
    adv_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 32,
        paddingBottom: 10,
        width: width,
    },
    linear_bg: {
        height: 20,
        width: 70,
        justifyContent:'center',
        alignItems:'center'
    },
    adv_title: {
        fontSize: 14,
        color: Colors.black_text,
        fontWeight: "bold"
    },
    adv_text: {
        fontSize: 12,
        color: Colors.gray_adv,
        width: '100%',
        fontStyle: 'italic'
    },
    adv_info: {
        marginLeft: 10,
        width: width * 0.5,
    },
    text:{
        fontSize:10,
        color: Colors.white
    },
    back:{
        marginTop:20,
        marginLeft:10,
        height:20,
        width:20,
        marginBottom:-20
    }
})