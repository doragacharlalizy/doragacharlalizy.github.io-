import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";

const colors = {
    gunmetal: '#30343fff',
    ghostWhite: '#fafaffff',
    periwinkle: '#e4d9ffff',
    delftBlue: '#273469ff',
    spaceCadet: '#1e2749ff',
};

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`;

const HandWaveIcon = styled.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${waveAnimation} 2.5s infinite;
    }
`;

const planeAnimation = keyframes`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        opacity: 0;
    }
    50% {
        transform: translateX(50px) translateY(-20px) rotate(15deg);
        opacity: 0.5;
    }
    100% {
        transform: translateX(100px) translateY(-40px) rotate(30deg);
        opacity: 1;
    }
`;

const ConnectContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 50px;
    color: #e0e1ddff; /* platinum */
    position: relative;
    overflow: hidden;
    z-index: 1;
    gap: 20px;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 20px;
        gap: 10px;
    }
`;

const Container = styled.section`
    color: #e0e1ddff; /* platinum */
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    text-align: center;
`;

const PaperPlane = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation: ${planeAnimation} 2s linear infinite;
    z-index: 1;
`;

const SVGContainer = styled.div`
    margin-bottom: 20px;
    transform: rotate(45deg);
    transition: transform 0.5s ease;

    &:hover {
        transform: rotate(0);
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #e0e1ddff; /* platinum */
    }
`;

const Title = styled.h2`
    font-size: 2em;
    margin: 20px 0;
    position: relative;
    z-index: 2;
    transition: font-size 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 480px) {
        font-size: 1.2em;
    }
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    text-align: center;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`;

const ContactInfo = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const Email = styled.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`;

const Phone = styled.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`;

const IconContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

const Icon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #778da9ff; /* silver lake blue */
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #415a77ff; /* yinmn blue */
    }

    svg {
        width: 60%;
        height: 60%;
        fill: #e0e1ddff; /* platinum */
    }
`;

const FormContainer = styled.div`
    width: 40%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 50%;
        padding: 20px;
    }
        
    @media (max-width: 480px) {
        width: 100%;
        padding: 20px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`;

const Input = styled.input`
    padding: 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 8px;
    background-color: ${colors.delftBlue};
    color: #e0e1ddff; /* platinum */

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #778da9ff; /* silver lake blue */
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${colors.delftBlue} inset !important;
        -webkit-text-fill-color: #e0e1ddff; /* platinum */
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`;

const Textarea = styled.textarea`
    padding: 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 8px;
    background-color: ${colors.delftBlue};
    color: #e0e1ddff; /* platinum */
    resize: none;
    height: 150px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #778da9ff; /* silver lake blue */
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${colors.delftBlue} inset !important;
        -webkit-text-fill-color: #e0e1ddff; /* platinum */
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`;

const Button = styled.button`
    padding: 15px;
    font-size: 1.2em;
    color: black; /* platinum */
    background-color: #778da9ff; /* silver lake blue */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1b263bff; /* oxford blue */
            color: #e0e1ddff; /* platinum */

    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`;


const tickAnimation = keyframes`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const typingAnimation = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

const ConfirmationMessage = styled.p`
    margin-top: 20px;
    color: #e0e1ddff; /* platinum */
    font-size: 1.2em;
    position: relative;
    overflow: hidden;
    text-align: center;

    @media (max-width: 1200px) {
        font-size: 1.1em;
    }

    @media (max-width: 992px) {
        font-size: 1em;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
    }

    @media (max-width: 576px) {
        font-size: 0.8em;
    }

    &.success {
        &:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            animation: ${tickAnimation} 0.3s ease forwards;
            background: url('path-to-your-tick-icon.svg') no-repeat center;
            background-size: contain;
        }

        &:after {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 0;
            margin-left: 10px;
            border-right: 2px solid #e0e1ddff; /* platinum */
            animation: ${typingAnimation} 1s steps(20, end) forwards;
        }
    }
`;



const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path fill='#000' d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
        <path fill='#000' d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"></path>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path fill='#000' d="M 25.921875 7.0976563 C 24.996094 7.5429688 24 7.8125 23 7.9726563 C 24.023438 7.3710938 24.75 6.3984375 25.085938 5.2539063 C 24.082031 5.8125 23 6.234375 21.859375 6.4765625 C 20.894531 5.4726563 19.511719 4.875 18 4.875 C 15.367188 4.875 13.25 6.9921875 13.25 9.625 C 13.25 10.007813 13.285156 10.375 13.367188 10.726563 C 9.373047 10.527344 5.7851563 8.609375 3.4257813 5.6523438 C 3.015625 6.3320313 2.78125 7.1171875 2.78125 7.9492188 C 2.78125 9.5078125 3.601563 10.875 4.8242188 11.652344 C 4.0117188 11.628906 3.25 11.402344 2.5898438 11.019531 C 2.5898438 11.039063 2.5898438 11.0625 2.5898438 11.089844 C 2.5898438 13.386719 4.2382813 15.28125 6.4101563 15.730469 C 6.015625 15.839844 5.5976563 15.894531 5.1679688 15.894531 C 4.8632813 15.894531 4.5664063 15.863281 4.28125 15.804688 C 4.8710938 17.652344 6.605469 19 8.6523438 19.035156 C 7.039063 20.246094 5.007813 20.941406 2.8125 20.941406 C 2.4726563 20.941406 2.1367188 20.921875 1.8007813 20.882813 C 3.867188 22.195313 6.34375 22.875 9 22.875 C 18 22.875 23.222656 15.96875 23.222656 10.167969 C 23.222656 9.9726563 23.21875 9.78125 23.210938 9.5859375 C 24.214844 8.8632813 25.097656 7.9609375 25.921875 7.0976563 Z"></path>
    </svg>
);

// // Connect component definition
// const Connect = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [confirmationMessage, setConfirmationMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post('https://api.web3forms.com/submit', {
//                 access_key: '8e4c1901-d8c1-4df8-aa46-700466520582',
//                 ...formData,
//             });

//             if (response.data.success) {
//                 setConfirmationMessage('Thank you for your message. We will get back to you soon.');
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 setConfirmationMessage('An error occurred. Please try again later.');
//             }
//         } catch (error) {
//             setConfirmationMessage('An error occurred. Please try again later.');
//         }
//         setLoading(false);
//     };

const Connect = () => {
    const [loading, setLoading] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://api.web3forms.com/submit', {
                access_key: '8e4c1901-d8c1-4df8-aa46-700466520582',
                ...formData,
            });

            if (response.data.success) {
                setConfirmationMessage('Thank you for your message. We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setConfirmationMessage(''), 5000); // Reset message after 5 seconds
            } else {
                setConfirmationMessage('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Submission error:', error); // Log error for debugging
            setConfirmationMessage('An error occurred. Please try again later.');
        }
        setLoading(false);
    };

    const handleConnectViaEmail = () => {
        window.location.href = 'mailto:lizdoragacharla@gmail.com';
    };

    return (
        <Container id="connect">     
            <ConnectContainer>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                        <Button onClick={handleConnectViaEmail}>Connect via Email</Button>
                    </Form>
                    {confirmationMessage && (
                        <ConfirmationMessage className={confirmationMessage.includes('Thank') ? 'success' : ''}>
                            {confirmationMessage.includes('Thank') && <FaCheckCircle />}
                            {confirmationMessage}
                        </ConfirmationMessage>
                    )}
                </FormContainer>
                <LeftSection>  
                    <HandWaveIcon role="img" aria-label="Wave emoji">👋</HandWaveIcon>

                    <Title>LET'S CONNECT</Title>
                    <Paragraph>
                        Reach out to us for any inquiries or collaborations. We're excited to hear from you!
                    </Paragraph>
                    <ContactInfo>
                        <Email>lizdoragacharla@gmail.com</Email>
                        <Phone>+1234567890</Phone>
                        <IconContainer>
                            <Icon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </Icon>
                            <Icon href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </Icon>
                            <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon />
                            </Icon>
                        </IconContainer>
                    </ContactInfo>
                </LeftSection>
            </ConnectContainer>
        </Container>
    );
};

export default Connect;