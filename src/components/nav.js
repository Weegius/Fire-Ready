import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Navcomp = ({name, link}) => {
  const pathname = useLocation()
  const navigate = useNavigate()
  return (
    <>
      {console.log(pathname)}
      { pathname !== name ? <Text color={'white'} ml={20} _hover={{color: 'orange', cursor: 'pointer'}} onClick={() => navigate(link)}>{name}</Text> : null}
    </>
  )
}

const NavBar = () => {
  return (
    <>
    <Navcomp name={'Home'} link={'/'} />
    <Navcomp name={'Resources'} link={'/resources'} />
    <Navcomp name={'Gallery'} link={'/gallery'} />
    <Navcomp name={'Story'} link={'/story'} />
    <Navcomp name={'Map'} link={'/map'} />
    </>
  )
}
export default NavBar