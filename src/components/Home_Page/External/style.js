import { Box, styled } from "@mui/material"

export const Container=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:40,
    marginTop:30,
    "& > div":{
        display:'flex',
        width:'100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    "& > div":{
        display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    "& > svg":{
            width:120,
            height:85,
            padding:30,
            border:'2px solid #0D2E71',
            borderRadius:5,
            fontSize:20,
            color: "#0D2E71",
            [theme.breakpoints.down("sm")]: {
                width:80,
                height:45
            }
        },
    "& > p":{
        marginTop:5,
        fontSize:20,
        fontWeight:700,
        color: "#0D2E71",
    }
    }
    }

}))
export const Heading=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:20,
    fontSize:30,
    fontWeight:700,
    color: "#0D2E71",
   
}))