import React,{ useState} from 'react'

function Logo() {
  const [defaultImg, setClicked] = useState(false);
  let muted = {muted:"/images/logo-muted.svg"}
  let defaultLogo = { default:"/images/logo.svg"}
  let type = "default"
  const handleClick = () => {
    setClicked(!defaultImg)
  }
  return (
    <>
    <img
    type={type}
    // type={!defaultImg ? "default" : "muted"  }
    onClick={handleClick}
    src={!defaultImg ? defaultLogo : muted}
    alt={!defaultImg ? "default" : "muted" }    
    ></img>
    </>
  )
}

export default Logo