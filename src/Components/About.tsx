/* library imports */
import React from "react";
import styled from "styled-components";

/* custom imports */
import aboutBannerImg from "../Images/aboutbanner.jpg";
import aboutusImg from "../Images/bloodbandcard.jpg";
import featuresContainerImg from "../Images/aboutimg.jpg";
import donateImg from "../Images/donarcard.jpg";
import adminImg from "../Images/admincard.png";
import bloodbankImg from "../Images/bloodbandcard.jpg";
import finddonorImg from "../Images/find donar.jpg";
import adminDashboardImg from "../Images/admindash.jpg";
import donationCampImg from "../Images/doncamp.jpg";
import ServiceCard from "./service-card";

/* interfaces */
interface ISpanTagProps {
  size: string;
  margin: string;
  padding: string;
  width: string;
}

/* styled components */

const Banner = styled.img`
  width: 100%;
  height: 50vh;
  @media (max-width: 768px) {
    height: 25vh;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BannerHeading = styled.span`
  color: white;
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 3.5vw;
  font-weight: bold;
  text-shadow: 2px 2px 10px black;
`;

const Container = styled.section`
  width: 80%;
  margin: auto;
`;

/* extending styles from a styled element */
const Containerinner = styled(Container)`
  width: 100%;
  position: relative;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 20px 0px;
  font-family: "Times New Roman";
  font-size: 2.5vw;
`;

const ImageSection = styled.section`
  height: 80vh;
  width: 50%;
  box-shadow: 2px 2px 10px black;
`;
const ParagraphTypeSecond = styled.p`
  width: 50%;
  position: absolute;
  left: 45%;
  font-family: "Times New Roman";
  top: 15%;
  border: 2px solid #f5cba7;
  background-color: white;
  text-align: justify;
  padding: 10px 10px;
`;

//using props based styled element

const Spantag = styled.span<ISpanTagProps>`
  background-color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => props.size || "1rm"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  border-radius: 10px;
  font-weight: bold;
  text-shadow: 2px 2px white;
`;

const Title = styled.h4`
  color: red;
  padding: 0% 0% 5% 5%;
  text-decoration: underline;
`;

const List = styled.ul`
  list-style-type: none;
  List li::before {
    content: "\2022";
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

/* main component */

const About = () => {
  return (
    <>
      <Wrapper>
        <Banner src={aboutBannerImg} />
        <BannerHeading>Who We Are</BannerHeading>
      </Wrapper>
      <Container>
        <Paragraph>About</Paragraph>
        <Containerinner>
          <ImageSection>
            <img src={aboutusImg} width="100%" height="100%" alt="imageAltText" />
          </ImageSection>
          <ParagraphTypeSecond>
            Blood Bank Society is a noble charity organization formed with the
            active initiation and guidance of Lt. Col. (Hon.) Dr. Monadal, under
            Act For Humanity. Act For Humanity is a Non-profit organization
            founded by Mr. Esahaque Eswaramangalam and a group of young social
            workers during 2004, with Lt. Col. (Hon.) Dr. Monadal as its
            goodwill ambassador, aiming to fight against terrorism and fanatic
            activities..ndian Blood Bank is aimed at promoting the awareness of
            blood donation among the public. It is committed to stay ahead of
            all linguistic-rational-religious-political differences and shall be
            fully focusing its objectives in health care activities, with
            technology support from WebCastle Media Pvt. Ltd., Cochin. Indian
            Blood Bank Society is registered as per The TCLSCS Registration Act
            XII of 1955 under the Government of Kerala. Initial operation of
            Indian Blood Bank shall be limited to Kerala and in the coming years
            its services shall be available all over India.
          </ParagraphTypeSecond>
        </Containerinner>
      </Container>
      <Container>
        <Spantag
          color="#D5D8DC"
          size="2.1vw"
          margin="10% 0%"
          padding="30px 10px"
          width="100%"
          className="spantag_about_page"
        >
          E-blood Bank Is A Centralized Blood Management System
        </Spantag>
      </Container>
      <Container>
        <div className="row">
          <div className="col-md-4">
            <Title>Objectives</Title>
            <List>
              <li>Safe and Adequate Blood Supplies</li>
              <li>Networking of Blood Banks</li>
              <li>Donation Camps Organization</li>
              <li>Fullfil blood Requirements</li>
            </List>
          </div>
          <div className="col-md-4">
            <Title>Features</Title>
            <List>
              <li>Web Based Application</li>
              <li>Easy Access and Usage</li>
              <li>Donar Contacts Repository</li>
              <li>location Based Searching</li>
            </List>
          </div>
          <div className="col-md-4">
            <img
              src={featuresContainerImg}
              height="150px"
              width="200px"
              alt="imageAltText"
            ></img>
          </div>
        </div>
      </Container>
      <Container>
        <div className="services_container_aboutpage">
          <div>
            <h3 className="servive_header_aboutpage">Our Services</h3>
          </div>
          <div className="row">
            <div className="col-md-3">
              <ServiceCard image={finddonorImg} val="Find Donar"></ServiceCard>
            </div>
            <div className="col-md-3">
              <ServiceCard image={donateImg} val="Donate"></ServiceCard>
            </div>
            <div className="col-md-3">
              <ServiceCard image={bloodbankImg} val="Blood Banks"></ServiceCard>
            </div>
            <div className="col-md-3">
              <ServiceCard image={adminImg} val="Volunteer"></ServiceCard>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <ServiceCard
                image={adminDashboardImg}
                val="Admin Dashboard"
              ></ServiceCard>
            </div>
            <div className="col-md-3">
              <ServiceCard image={donationCampImg} val="Camps"></ServiceCard>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
