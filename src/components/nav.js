import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Navcomp = ({name, link}) => {
  const pathname = useLocation()
  const navigate = useNavigate()
  return (
    <>
      { pathname !== name ? <Text color={'white'} fontSize="3xl"  ml={20} _hover={{color: 'orange', cursor: 'pointer'}} onClick={() => navigate(link)}>{name}</Text> : null}
    </>
  )
}

const NavBar = () => {
  return (
    <>
    <Navcomp name={'Home'} link={'/'} />
    <Navcomp name={'Story'} link={'/story'} />
    <Navcomp name={'Gallery'} link={'/gallery'} />''
    <Navcomp name={'Resources'} link={'/resources'} />

    {/* <Navcomp name={'Map'} link={'/map'} /> */}
    </>
  )
}
export default NavBar