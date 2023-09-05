import Twitter from '/Source/Business-Card/src/assets/Twitter.png';
import Facebook from '/Source/Business-Card/src/assets/Facebook.png';
import Instagram from '/Source/Business-Card/src/assets/Instagram.png';
import GitHub from '/Source/Business-Card/src/assets/GitHub.png';

const Socials = () =>{
    return(
        <div className='section-4'>
            <a href="https://twitter.com/Fortunateomonuw"><img src={Twitter} alt="Twitter Icon" /></a>
            <a href="#"><img src={Facebook} alt="FaceBook Icon" /></a>
            <a href="https://www.instagram.com/fortunate_omonuwa/"><img src={Instagram} alt="Instagram Icon" /></a>
            <a href="https://github.com/FortunateOmonuwa"><img src={GitHub} alt="GitHub Icon" /></a>
        </div>
    )
}

export default Socials;