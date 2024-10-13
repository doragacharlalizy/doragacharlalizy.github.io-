import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import awsCertificate from '../assets/aws_certificate.pdf';
import pythonCertificate from '../assets/python_certificate.pdf';  // Assuming you have a Python certificate PDF
import nptelCertificate from '../assets/nptel_certificate.jpg';
import courseraCertificate from '../assets/coursera_certificate.pdf';
import aiCourseCertificate from '../assets/ai_course_certificate.pdf';  // Assuming you have an AI course certificate PDF

// Define your colors in a central place
const theme = {
  colors: {
    gunmetal: '#30343f',
    ghostWhite: '#fafaff',
    spaceCadet: '#1e2749',
    delftBlue: '#273469',
  },
};

const CertificatesContainer = styled.div`
  padding: 50px 20px;
  color: ${({ theme }) => theme.colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.spaceCadet} 30%, ${({ theme }) => theme.colors.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Date = styled.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
    justify-content:center;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.gunmetal};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.gunmetal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.spaceCadet};
    color: ${({ theme }) => theme.colors.ghostWhite};
    border-color: ${({ theme }) => theme.colors.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`;

const certificates = [
  {
    id: 'aws-certificate',
    title: 'AWS - Cloud Foundations',
    date: 'OCT-DEC 2022',
    description:
      'Completed a course on AWS Cloud Foundations, gaining knowledge in cloud computing and AWS services under the guidance of AWS Architect Aditya Sundar.',
    downloadLink: awsCertificate,
  },
 
  {
    id: 'nptel-certificate',
    title: 'NPTEL - Internet of Things',
    date: 'JUL-OCT 2022',
    description:
      'Acquired a comprehensive understanding of IoT basics and sensor workings through the NPTEL course.',
    downloadLink: nptelCertificate,
  },
  {
    id: 'coursera-certificate',
    title: 'Coursera - Data Science',
    date: 'FEB-APR 2022',
    description:
      'Focused on programming for Python within the Data Science domain, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.',
    downloadLink: courseraCertificate,
  },
  
];

const Certificates = () => {
  return (
    <ThemeProvider theme={theme}>
      <CertificatesContainer>
        <Title>Certificates</Title>
        <CardContainer>
          {certificates.map((certificate) => (
            <Card key={certificate.id}>
              <CardContent>
                <CardTitle>{certificate.title}</CardTitle>
                <Date>Date: {certificate.date}</Date>
                <Description>{certificate.description}</Description>
              </CardContent>
              <ButtonGroup>
                {certificate.downloadLink && (
                  <Button
                    as="a"
                    href={certificate.downloadLink}
                    download={`${certificate.title.replace(/\s+/g, '-')}_certificate.pdf`}
                  >
                    Download
                  </Button>
                )}
                <Button
                  as="a"
                  href={certificate.downloadLink}
                  target={certificate.downloadLink ? "_blank" : undefined}
                  rel={certificate.downloadLink ? "noopener noreferrer" : undefined}
                >
                  View
                </Button>
              </ButtonGroup>
            </Card>
          ))}
        </CardContainer>
      </CertificatesContainer>
    </ThemeProvider>
  );
};

export default Certificates;
