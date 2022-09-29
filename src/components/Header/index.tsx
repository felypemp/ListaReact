import {
    Container,
    Content,
    ImageLogo,
} from './styles';
import logoSvg from '../../assets/icons/logo.svg';

export function Header(){
    return (
        <Container>
            <Content>
                <ImageLogo src={logoSvg} alt="Stackx"/>
                <button>
                    <img src='https://github.com/felypemp.png'></img>
                </button>
            </Content>
        </Container>
    );
}