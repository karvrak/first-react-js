import { Black, Darkpurple,Gold, White, BrightRed, DarkRed, Gray} from "./colors"

export const background  = {   
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor:Gold  ,
    
}

export const header = {
    backgroundColor: Darkpurple,
    height: '13vh',
    weight: '15vh'
}

export const buttonHome = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '10vh',
    backgroundColor: Darkpurple,
    color: White,
    fontSize:'3vh',
    borderRadius: '12vh',
    marginTop:"10vh", 
    padding: '10vh 20vh',

}

export const firstDiv = {
    position: 'absolute',     
    top: 0,
    left: 0,
    display: 'grid',
    placeContent: 'center',
    height: '100%',
    width: '100%'
}

export const pageSwitcherButton = {
    backgroundColor: BrightRed,
    color: Black,
    marginLeft: '0.5%',
    marginRight: '0.5%',

}

export const pageSwitcherButtonDiseable = {
    backgroundColor: DarkRed,
    color: Black,
    marginLeft: '0.5%',
    marginRight: '0.5%',

}

export const imageStyleBrowser = {
    width: '25vh',
    height: '35vh',
}



export const imageGalleryContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10vh',
  
}

export const GridBrowser = {
    
    paddingLeft : '15%',
    paddingRight : '10%',

}

export const OverviewFlex = {
    display: 'flex',
    height: '61%',
    
}

export const imageDescStyle = {
   width: "44vh",
   backgroundColor: Gray, 
   borderRadius: '3vh',
}

export const flavorStyle = {
    fontStyle: "italic",
}


export const GalleryWrappe = {
    display:" grid",
    gridGap: "5vh",
    gridTemplateColumns: "repeat(5, 225px)",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2vh',
    
}

export const SwitcherStyle = {   
    marginTop: '2vh'
}

export const containerAnime = {   

}
export const CardAnime = {   
    width: "375px",
    height: "523px",
    perspective: "1000px",

}
export const ContentAnime = {   
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "16px",
    transition: "all 0.5s ease-in-out",
    backgroundColor: Black,
}
export const GlowAnime = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    transition: "all 0.5s ease-in-out",
    borderRadius: "16px",
    mixBlendMode: "hard-light",
    opacity: "0.5",

    background: "radial-gradient(circle at 50% 0%, rgb(184, 196, 211), transparent"
}
export const imageStyleOverview = {
   
    width: "100%",
    height: "100%",
    objectFit: "cover",

}
