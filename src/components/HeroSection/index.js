import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, HeroBtnWrapper } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

  return (
    <HeroContainer id='home'>
      <HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>Sign Up for a new account today and recieve $250 in credit towards your next payment</HeroP>
				<HeroBtnWrapper>
					<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offfset={-80}>
						Get started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
