import React,{ useState} from 'react'

function Logo({type= "default"}) {
  const [defaultImg, setClicked] = useState(false);
  let muted = "/images/logo-muted.svg"
  let defaultLogo = "/images/logo.svg"
 
  const handleClick = () => {
    setClicked(!defaultImg)
  }
  return (
    <>
    <img
    
    type={!defaultImg ? "default" : "muted"  }
    onClick={handleClick}
    src={!defaultImg ? defaultLogo : muted}
    alt={!defaultImg ? "default" : "muted" }    
    ></img>
    </>
  )
}

export default Logo


// this code is only for validaiton of the task and is not working!
// export default function Logo({ type = "default" }) {
//   const defaultLogoUrl = "./images/logo.svg";
//   const mutedLogoUrl = "./images/logo-muted.svg";

//   if (type === "default") {
//       return React.createElement("img", { src: defaultLogoUrl }, null);
//   }

//   return React.createElement("img", { src: mutedLogoUrl }, null);
// }