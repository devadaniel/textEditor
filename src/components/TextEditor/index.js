import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  TextEditorContainer,
  HeadingImageContainer,
  Heading,
  TextEditorImage,
  EditorContainer,
  ButtonContainer,
  Button,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldText: false,
    italicText: false,
    underLineText: false,
  }

  onClickBoldText = () => {
    this.setState(prevState => ({boldText: !prevState.boldText}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italicText: !prevState.italicText}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underLineText: !prevState.underLineText}))
  }

  render() {
    const {boldText, italicText, underLineText} = this.state

    const boldButtonColor = boldText === false ? '#f1f5f9' : '#faff00'
    const italicButtonColor = italicText === false ? '#f1f5f9' : '#faff00'
    const underLineButton = underLineText === false ? '#f1f5f9' : '#faff00'

    const fontWeight = boldText === false ? 'normal' : 'bold'
    const textDecoration = underLineText === false ? 'normal' : 'underline'
    const fontStyle = italicText === false ? 'normal' : 'italic'

    return (
      <MainContainer>
        <TextEditorContainer>
          <HeadingImageContainer>
            <Heading className="heading">Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingImageContainer>
          <EditorContainer>
            <ButtonContainer>
              <li>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBoldText}
                  color={boldButtonColor}
                >
                  <VscBold size={20} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italicButtonColor}
                >
                  <GoItalic size={20} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underLineButton}
                >
                  <AiOutlineUnderline size={20} />
                </Button>
              </li>
            </ButtonContainer>

            <TextAreaElement
              rows="25"
              cols="40"
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
