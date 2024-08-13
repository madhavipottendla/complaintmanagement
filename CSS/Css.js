import { StyleSheet,Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headercontainer: {
        backgroundColor: '#0E0E44',
        flexDirection: 'row',
        paddingHorizontal: width * 0.00,
        paddingVertical:width*0.06,
        justifyContent: 'space-evenly'
    },
    headerimage: {
        width: width * 0.22,
        height: height * 0.02,
    },
    headerlogoview: {
        flex:0,
        alignItems:'center',
        justifyContent:'center'
    },
    headertext: {
        fontSize: width * 0.037,
        color: 'white',
        fontWeight: 'bold',
        
    },
    headertext1: {
        fontSize: width * 0.028,
        color: 'white',
        fontWeight: '100',
        textAlign: 'center',
        paddingTop: width * 0.02
    },
    sliderbg:{
        // backgroundColor: '#264782',
        borderBottomRightRadius: width*0.03,
        borderBottomLeftRadius: width*0.03,
        paddingVertical: width*0.02,
        paddingLeft:width*0.08,
        height: width,
       
    },
    sliderimage:{
    width: width*0.80,
    height: width,
    borderRadius: 10
    },
    complainttext:{
       fontSize:width*0.05,
       fontWeight:'500',
        backgroundColor:'white',
        textAlign:'center',
        padding:width*0.03,
        marginHorizontal:width*0.05,
        color:'#264782',
        borderRadius:20,
        
    },
    complaint:{
        paddingTop:width*0.03,
        // paddingBottom:width,
        position:'absolute',
        paddingTop:width*1.1,
        left:width*0.12

    },
    complaint1:{
        paddingTop:width*0.03,
        // paddingBottom:width,
        position:'absolute',
        
        left:width*0.12,
        paddingTop:width*0.30

    },
    tracktext:{
       fontSize:width*0.05,
       fontWeight:'500',
        backgroundColor:'white',
        textAlign:'center',
        padding:width*0.03,
        marginHorizontal:width*0.05,
        color:'#264782',
        borderRadius:20,
        paddingHorizontal:width*0.08
        
    },
    bottomSheetBackground: {
    backgroundColor: 'white', 
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0,
    elevation:30
  },
     overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray', // semi-transparent black
    zIndex: 0, // Ensure this is below the BottomSheet
  },
  bottomSheet: {
    zIndex: 1, // Ensure BottomSheet is above the overlay
    
  },
  hometext3: {
        fontSize: width * 0.03,
        fontWeight: '300',
        textAlign: 'center',
        paddingVertical: width * 0.05,
        backgroundColor: '#070720',
        color: 'white',
        borderRadius: 5,
        marginTop: width * 0.10
    },
    footer: {
        paddingTop: width * 0.66
    },
    complainttext1:{
       fontSize:width*0.05,
       fontWeight:'300',
        backgroundColor:'#264782',
        textAlign:'center',
        padding:width*0.03,
        marginHorizontal:width*0.05,
        color:'white',
        borderRadius:70,
        elevation:50
        
    },
    bottomv:{
        paddingTop:width*0.20
    }
})
export default styles