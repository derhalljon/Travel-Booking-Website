import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


//Images
import BaliTempleImg from "../../images/bali-temple.jpeg";
import RiceTerraceImg from "../../images/rice-terrace.jpeg";
import ExoticBromoImg from "../../images/exotic-bromo.jpeg";
import MaleMaldivesImg from "../../images/male-maldives.jpeg";
import IceTeaImg from "../../images/ice-tea.jpeg";

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-4
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-6
    lg:pr-6
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
    ${tw`
        flex
        flex-col
    `}

    img {
        ${tw`
            max-w-full
            max-h-full
        `}
    }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function ExploreSection() {
    return (
        <ExploreSectionContainer name="Explore">
            <Title>Tour Options</Title>
            <SectionInfo>
                Select your destination and view our available tour packages. 
                Here you will find all of the information that you need for the 
                adventure of a lifetime. Whether it's local history, nature or the impressive cities, 
                we will help you tailor the perfect trip for you.
            </SectionInfo>
            <ExploreSectionWrapper>
                <Carousel dynamicHeight={false}>
                    <Item>
                        <img src={BaliTempleImg}/>
                        <Description>Temple in Bali</Description>
                    </Item>
                    <Item>
                        <img src={RiceTerraceImg}/>
                        <Description>Rice Terrace</Description>
                    </Item>
                    <Item>
                        <img src={ExoticBromoImg}/>
                        <Description>Mount Bromo </Description>
                    </Item>
                    <Item>
                        <img src={MaleMaldivesImg}/>
                        <Description>Mal?? - Capital of the Maldives</Description>
                    </Item>
                    <Item>
                        <img src={IceTeaImg}/>
                        <Description>Surfboards on the beach</Description>
                    </Item>
                </Carousel>
            </ExploreSectionWrapper>
        </ExploreSectionContainer>
    );
};