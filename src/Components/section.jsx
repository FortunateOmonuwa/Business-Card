import NameSection from "./section1";
import Contact from "./section2";
import About from "./section3";
function Section(){
    return(
        <div className="section">
             <NameSection/>
             <Contact/>
             <About/>
             
        </div>
       
    )
}

export default Section;