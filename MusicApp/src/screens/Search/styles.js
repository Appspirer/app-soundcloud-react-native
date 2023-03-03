import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        marginTop:10,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    search:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: Colors.white,
        shadowColor:Colors.black_text,
        shadowOffset:{
            height:1
        },
        shadowOpacity:0.2,
        width: width*0.75,
        height:40,
        borderRadius:24,
        paddingHorizontal:16
    },
    input:{
        marginLeft:10
    },
    content:{
        marginHorizontal:16,
        marginTop:20,
        flex:1
    },
    recents:{
        fontSize:22,
        color: Colors.black_text,
        fontWeight:"700",
        fontStyle:'normal'
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16
    },
    close:{
        width:30,
        alignItems:'flex-end',
        height:30,
        justifyContent:'center'
    },
    item_left:{
        width: width - 30 - 32,
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        height:40,
        width:40,
        borderRadius:5,
        marginRight:10
    },
    name:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.black_text
    },
    artist:{
        fontSize:14,
        fontWeight:'500',
        fontStyle:'italic',
        color: Colors.gray_text
    }
})