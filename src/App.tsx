import Footer from "./layout/footer"
import Header from "./layout/header"
import CoursesSection from "./section/course"
import FAQSection from "./section/faq"
import Reviews from "./section/feedback"
import BenefitsForm from "./section/form"
import HSKRoadmapSection from "./section/ProblemsSection"
import OnlineLearningSection from "./section/program"
import GuaranteeSection from "./section/Section2"
import TeachersSection from "./section/teacher"
import VideoSection from "./section/video"
import WhySection from "./section/why"
import Hero from "./ui/Hero"
import MobileContactBar from "./ui/MobileContactBar"

function App() {
  return (
   <div>
    <Header/>
    <Hero/>
    
    <WhySection/>
    <HSKRoadmapSection/>
    <CoursesSection/>
    <GuaranteeSection/>
        <OnlineLearningSection/>

    <TeachersSection/>
    <Reviews/>
        <VideoSection/>

    <FAQSection/>
    <BenefitsForm/>
       <MobileContactBar
        phone="0901234567"
        zaloUrl="https://zalo.me/0901234567"
        messengerUrl="https://m.me/uommamhsk"
      />
    <Footer />
   </div>
  )
}

export default App