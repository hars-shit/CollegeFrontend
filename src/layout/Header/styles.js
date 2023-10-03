import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Marquee from "react-fast-marquee";
 export const Header=styled(AppBar)(({theme})=>({
    background:'#0d1057',
    height:'46px',
    width:'100%',
    display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
           height:'100px',
        }
}))
export const ToolBar=styled(Toolbar)(({theme})=>({
    display:'flex',
    width:'100%',
    padding:0,
    gap:10,
    '& > div':{
        display:'flex',
        width:'100%',
        alignItems:'center',
        justifyContent: 'space-around',
            flexDirection:'row',
            '& > a':{
                fontSize:15,
                display:'flex', 
                justifyContent:'center',
                textDecoration:'none',
                gap:10,
                alignItems:'center',
                fontWeight:700,
                
                color:'white',
            },
            
        },
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            '& > div':{
              
            flexDirection:'column',
            gap:10,
            '& > a':{
                fontSize:10,
            }
           }
        }
}))
export const Container=styled(AppBar)(({theme})=>({
    boxShadow:'none',
    background:'white',
    height:120,
    '& > div':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:0,
        paddingRight:10,
        '& > div':{
            '& > div':{    
                '& > p':{
                    color:'black',
                }
            }
        }
    },
    [theme.breakpoints.down('sm')]:{
        height:80
    }
    
}))
export const Image=styled('img')(({theme})=>({
    width:'10.5rem',
    height:'6rem',
    [theme.breakpoints.down('sm')]:{
        width:'7rem',
        height:'4rem',
    }
}))
export const Icon=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

})
export const Items=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'35%',
    '& > button':{
        color:'#7E1717',
        fontSize:'1vw',
        fontWeight:600,
       border:'none',
       background:'none',
       
    },
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
  
}))
export const Signin=styled(Box)(({theme})=>({
    '& > button':{
        background:'white',
        width:'5.5rem',
        height:'2rem',
        color:'#7E1717',
        fontWeight:600,
        borderRadius:5,
        fontSize:'1vw',
        transition: 'background 0.4s ease, color 0.5s ease',
    },
    '& > button:hover':{
        background:'#7E1717',
        color:'white',
    },
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
  
}))
export const ImageBox=styled(Box)(({theme})=>({
    width:133,
    [theme.breakpoints.down('sm')]:{
       width:100
    }

}))

export const Hindi=styled(Typography)(({theme})=>({
    fontSize:'28px',
     fontWeight:700 ,
     lineHeight:1,
     [theme.breakpoints.down('sm')]:{
        fontSize:'13px',
    }
    
}))

export const English=styled(Typography)(({theme})=>({
    fontSize:'24px', 
    fontWeight:700,
    [theme.breakpoints.down('sm')]:{
        fontSize:'11px',
    }
   
}))
export const Deemd=styled(Typography)(({theme})=>({
    fontSize:'14px', 
    fontWeight:700,
    [theme.breakpoints.down('sm')]:{
        fontSize:'7px',
    }
  
}))
export const Loc=styled(Typography)(({theme})=>({
    fontSize:'14px',
    fontWeight:700,
    [theme.breakpoints.down('sm')]:{
        fontSize:'7px',
    }
}))
export const Menu=styled(Box)(({theme})=>({
    '& > svg':{
        fontSize:25,
        color:'black',
    }
}))

export const Bottom=styled(AppBar)({
    height:20,
    background:'white',
    display:'flex',
    // alignItems:'center',
    alignItems:'flex-start',
    padding:0,
    justifyContent:'center',
    '& > div':{
        // display:'flex',
        padding:0,
        flexDirection:'row',
    }
    
})
export const Text=styled(Box)({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    height:20,
    // width: '14rem',
    // marginLeft: '-2rem',
    background:'#0d1057',
    // paddingRight:12,
    '& > p':{
        padding:5,
        color:'white',
        fontSize:10,
    }
})
export const MarqText=styled(Typography)(({theme})=>({
    fontSize:12,
    color:'#0d1057',
    [theme.breakpoints.down('sm')]:{
        fontSize:8,
    }
   
}))