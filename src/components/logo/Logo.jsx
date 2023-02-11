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



// function Logo({type = "default"}) {
//   let muted = "/images/logo-muted.svg"
//     let defaultLogo = "/images/logo.svg"
//     if (type === "default") {
//       return React.createElement("img", { src: defaultLogoUrl }, null);
//   }

//   return React.createElement("img", { src: mutedLogoUrl }, null);

// }

// export default Logo