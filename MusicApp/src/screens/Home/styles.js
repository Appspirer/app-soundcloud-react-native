import {StyleSheet, Dimensions} from 'react-native'
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
    title_mood:{
        fontSize:22,
        fontWeight:'bold',
        color: Colors.black_text,
        fontStyle:'normal'
    },
    artist_img:{
        width: (width-16*4)/3,
        height:(width-16*4)/3,
        borderRadius:5
    },
    artist_title:{
        fontSize:12,
        fontWeight:'bold',
        color: Colors.black_text,
        marginTop:5,
        textAlign:"center"
    }
})