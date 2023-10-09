import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  background-size: cover;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  background-size: cover;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 100px;
`

export const HeadingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const TextEditorImage = styled.img`
  width: 70%;
`

export const EditorContainer = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 60vh;
  min-width: 20vw;
  margin-left: 30px;
  border: 2px solid #334155;
  border-radius: 9px;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const HrLine = styled.hr`
  color: #334155;
  width: 100%;
  border-radius: 1px;
`

export const TextAreaElement = styled.textarea`
  padding-top: 0px;
  background-color: #25262c;
  border: 0.1px solid #334155;
  outline: none;
  padding: 10px;
  color: #f8fafc;
  padding-left: 10px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
