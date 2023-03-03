import {Dimensions, StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1
    },
    hot_img:{
        width: (width-16*3)/2,
        height:(width-16*3)/2,
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
    action_item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:14,
        paddingHorizontal:16,
    },
    action_left:{
        flexDirection:"row",
        alignItems:'center'
    },
    action_right:{
        flexDirection:"row",
        alignItems:'center'
    },
    list:{
        backgroundColor:Colors.white,
        marginTop: 15
    },
    action_title:{
        fontSize:16,
        color: Colors.black_text2,
        marginLeft:15
    },
    action_icon:{
        width:20,
        alignItems:'center'
    },
    new_text:{
        fontSize:10,
        color: Colors.white
    },
    new:{
        backgroundColor: Colors.orange,
        paddingHorizontal:8,
        paddingVertical:3,
        borderRadius:5,
        marginRight:10
    },
    line:{
        height:1,
        width:width-32,
        alignSelf:'flex-end',
        backgroundColor: Colors.transparent
    },
    recents:{
        marginTop:20,
        fontSize:22,
        color: Colors.black_text,
        fontWeight:"700",
        marginHorizontal:16,
        fontStyle:'normal'
    }
})