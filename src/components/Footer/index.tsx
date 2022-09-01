import React from "react";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { Logo } from "../Logo";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const FooterContainer = tw.div`
    w-full
    h-96
    bg-dark-blue-500
    mt-10
    flex
    pt-6
    pl-2
    pr-2
    lg:pt-14
    lg:pr-16
    lg:pl-16
    text-white
    items-center
    flex-col
`;

const Wrapper = tw.div`
    flex
    flex-col
    w-full
    h-full
    justify-center
    max-w-6xl
    lg:max-w-7xl
`;

const TopSection = tw.div`
    flex
    w-full
    justify-center
    lg:justify-start
`;

const InnerContainer = tw.div`
    w-full
    flex
    flex-col
    lg:flex-row
    flex-wrap
    pt-16
    lg:pt-9
    justify-between
    lg:justify-start
    h-full
`;

const LeftInnerContainer = tw.div`
    flex
    flex[5]
    w-full
    h-full
    justify-between
    lg:justify-start
`;

const RightInnerContainer = tw.div`
    flex
    flex-col
    lg:flex-row
    flex[1]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const Menu = tw.ul`
    flex
    flex-col
    list-none
    mr-3
    lg:ml-5
    lg:mr-16
`;

const MenuItem = tw.li`
    flex
    text-white
    text-sm
    lg:text-base
    mt-2
    cursor-pointer

`;

const BottomSection = tw.div`
    w-full
    flex
    flex-row
    items-center
    justify-between
    pl-4
    pr-4
    h-28
    lg:h-14
    bottom-0
    border-t
    border-t-gray-300
    border-opacity-50
`;

const Copyright = tw.p`
    font-size[x-small]
    text-gray-500
    w-full
    lg:w-auto
    text-center
`;

const SmallText = tw.span`
    font-size[small]
    text-gray-500
`;

const SocialMedia = tw.div`
    flex
    justify-center
`;

const Icon = tw.span`
    h-6
    flex
    mr-4
    cursor-pointer
    transition-colors
    hover:text-gray-300
`;

export function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
            <TopSection>
                    <Logo />
                </TopSection>
                </Wrapper>
            <Wrapper>
                <InnerContainer>
                    <LeftInnerContainer>
                        <Menu>
                            <MenuItem>
                            <Link to="Home">Home</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="Explore">Explore</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="TravelPlaces">Travel Places</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="Home">About Us</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="Home">Contact Us</Link>
                            </MenuItem>
                        </Menu>
                    </LeftInnerContainer>
                    <RightInnerContainer>
                        <SocialMedia>
                           <Icon>
                            <SiFacebook size={25} />
                           </Icon>
                           <Icon>
                            <SiTwitter size={25} />
                           </Icon> 
                           <Icon>
                            <SiInstagram size={25} />
                           </Icon> 
                        </SocialMedia>
                    </RightInnerContainer>
                </InnerContainer>
                <BottomSection>
                    <Copyright>
                        © 2022 Travelpedia - All rights reserved
                    </Copyright>
                    <SmallText>
                        <a href="#">Home</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Privacy Policy</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Terms of Service</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Sitemap</a>
                    </SmallText>
                </BottomSection>
            </Wrapper>
        </FooterContainer>
    );
}