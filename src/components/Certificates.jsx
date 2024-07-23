import React from 'react';
import styled from 'styled-components';

// Import your certificate PDFs
import awsCertificate from '../assets/aws_certificate.pdf';
import nptelCertificate from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';

const colors = {
  gunmetal: '#30343f',
  ghostWhite: '#fafaff',
  spaceCadet: '#1e2749',
  delftBlue: '#273469',
};

const CertificatesContainer = styled.div`
  padding: 50px 20px;
  color: #e0e1dd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: ${colors.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
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
  background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${colors.ghostWhite};

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
  color: ${colors.ghostWhite};

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
  color: ${colors.gunmetal};
  font-weight: 600;
  background-color: ${colors.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${colors.gunmetal};
  
  &:hover {
    background-color: ${colors.spaceCadet};
    color: ${colors.ghostWhite};
    border-color: ${colors.ghostWhite};
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
    title: 'AWS - Academy Foundation',
    date: 'OCT-DEC 2022',
    description:
      'Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.',
    downloadLink: awsCertificate,
  },
  {
    title: 'NPTEL - Internet of Things',
    date: 'JUL-OCT 2022',
    description:
      'Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.',
    downloadLink: nptelCertificate,
  },
  {
    title: 'Coursera - Data Science',
    date: 'FEB-APR 2022',
    description:
      'Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.',
    downloadLink: courseraCertificate,
  },
];

const Certificates = () => {
  return (
    <CertificatesContainer>
      <Title>Certificates</Title>
      <CardContainer>
        {certificates.map((certificate, index) => (
          <Card key={index}>
            <CardContent>
              <CardTitle>{certificate.title}</CardTitle>
              <Date>Date: {certificate.date}</Date>
              <Description>{certificate.description}</Description>
            </CardContent>
            <ButtonGroup>
              {certificate.downloadLink && (
                <Button href={certificate.downloadLink} download={`${certificate.title.replace(/\s+/g, '-')}_certificate.pdf`}>
                  Download
                </Button>
              )}
              <Button href={certificate.downloadLink} target="_blank">
                View
              </Button>
            </ButtonGroup>
          </Card>
        ))}
      </CardContainer>
    </CertificatesContainer>
  );
};

export default Certificates;
