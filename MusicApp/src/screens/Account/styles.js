import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    close_container: {
        width: 20,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    bg: {
        width: width - 32,
        alignSelf: 'center',
        height: (width - 32) * 150 / 335,
        padding: 12,
        marginBottom: 20
    },
    adv_title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.white,
        width: '50%',
        fontStyle: 'italic'
    },
    adv_content: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500',
        fontStyle: 'italic',
        width: '70%',
        marginTop: 10
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    info_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.black_text,
        fontStyle:'normal'
    },
    edit: {
        fontSize: 14,
        color: Colors.gray_text,
        fontStyle: 'italic',
        marginTop: 3
    },
    action_container: {
        backgroundColor: Colors.white,
        marginTop:20
    },
    action_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:14,
        paddingHorizontal: 16
    },
    action_name: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black_text2
    },
    free_user: {
        backgroundColor: Colors.orange,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6
    },
    text_free_user: {
        fontSize: 10,
        color: Colors.white,
    },
    line:{
        width:width-32,
        alignSelf:'flex-end',
        height:1,
        backgroundColor: Colors.border
    },
    hot_img:{
        width: (width-16*3)/3,
        height:(width-16*3)/3,
        borderRadius:5
    },
    hot_title:{
        fontSize:12,
        fontWeight:'bold',
        color: Colors.black_text,
        marginTop:5,
        textAlign:"center"
    },
    hot_follow:{
        fontSize:8,
        fontWeight:'300',
        color: Colors.gray_text,
        fontStyle:'italic',
        marginTop:3,
        textAlign:'center'
    },
})