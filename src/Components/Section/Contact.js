import React from 'react'
import styled from 'styled-components'
import emailjs from "@emailjs/browser"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.03);
  border: 3px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 20px;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 3px 3px white;
    filter: brightness(1);
    transform: scale(101%);
  }
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const ContactInput = styled.input`
  flex: 1;
  outline: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  background-color: hsla(271, 100%, 50%, 1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: hsla(271, 100%, 60%, 1);
  }

  &:focus {
    outline: none;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

function Contact() {
  const HandleSubmit = function (e) {
    e.preventDefault();
    console.log(e.currentTarget)
    emailjs
      .sendForm(
        "service_wht1yft",
        "template_o3wj4ye",
        e.currentTarget,
        "vTSBmoP3-NicAZLWg"
      )
      .then(
        function (result) {
          alert("Message Sent");
          e.currentTarget.reset(); 
        },
        function (error) {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel Free to reach out to me for any questions</Desc>
        <ContactForm onSubmit={HandleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={7}
            required
          />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
}

export default Contact;
