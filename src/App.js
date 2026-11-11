import styled from "styled-components"

export const Header = styled.div`
display: flex;
gap: 60px;
margin: 10px 20px;
p{
    font-size: 20px;
    font-weight: 500;
    color: white;
}
`
export const ConteinerPrincipal = styled.div`
display: flex;
align-items: center;
`
export const CaixaMae = styled.div`
width: 50vw;
margin: 15px;
display: flex;
flex-direction: column;
align-items: center;
p{
    color: white;
    font-size: 20px;
    font-weight: 500;
}
`
export const Logo = styled.img`
width: 180px;
height: auto;
margin: 0px 0px 8px 0px;
`
export const Button = styled.button`
height: 35px;
width: 100px;
color: white;
background-color: red;
border: solid 0,2px, white;
border-radius: 10px;
cursor: pointer;
margin-top: 10px;
`
export const Mario = styled.img`
width: 50vw;
`
export const Videofundo = styled.video`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
object-fit: cover;
z-index: -1;
`
export const Mascaranegra = styled.div`
position: fixed;
inset: 0;
width: 100%;
height: 100vh;
background: rgba(0,0,0,0.5);
z-index: -1;
`
export const Formulario = styled.div`
display: flex;
flex-direction: column;
width: 38vw;
height: 200px;
input{
    height: 28px;
    border-radius: 7px;
}
textarea{
    height: 100%;
    border-radius:7px ;
}
`