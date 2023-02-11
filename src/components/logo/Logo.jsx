import React,{ useState} from 'react'

function Logo(type) {
  const [defaultImg, setClicked] = useState(false);
  let muted = "/images/logo-muted.svg"
  let defaultLogo = "/images/logo.svg"
  const handleClick = () => {
    setClicked(!defaultImg)
  }
  return (
    <>
    <img
    type={defaultImg ? "default" : "muted"}
    onClick={handleClick}
    src={defaultImg ? defaultLogo : muted}
    alt={defaultImg ? "default" : "muted" }    
    ></img>
    </>
  )
}

export default Logo