import Lottie from "lottie-react"
import heroJson from '../../../assets/hero.json'

export const HeroLottie = () => {
    return <Lottie animationData={heroJson} loop={true}></Lottie>;
}