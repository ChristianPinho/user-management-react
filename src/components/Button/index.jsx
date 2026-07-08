import { ButtonContainer } from './styles'

function Button({ children, theme, ...props }) {

    return (
        <ButtonContainer {...props} theme={theme}>
            {children}
        </ButtonContainer>
    )
}

export default Button