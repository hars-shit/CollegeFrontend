import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    // marginBottom: "5rem",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      '& > img':{
          width:120,
          borderRadius:'50%'
      },
      "& > p": {
        color: "#0d1057",
        width: 187,
        display: "flex",
        textAlign: "center",
        fontWeight:600,
        height:80,
      },
    },
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr ",
      "&>div": {
        "& > img": {
          width: 100,
          height: "auto",
        },
        "& > p":{
          fontSize:14
        }
      },
    },
  }));