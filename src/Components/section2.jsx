import Mail from '/Source/Business-Card/src/assets/Mail.png';
import LinkedIn from '/Source/Business-Card/src/assets/linkedin.png';

const Contact = ()=>{
    return(
        <div className='contact'>
            <a href='#' className='email-container' target='blank'>
                <img src={Mail} alt="Mail Icon" className='mail-icon' />
                <span className='email-text'>Email</span>
            </a>
            <a href='#' className='linkedin' target='blank'>
                <img src={LinkedIn} alt="LinkedIn Icon" className='linkenIn-icon'/>
                <span className='linkedin-text'>LinkedIn</span>
            </a>
        </div>
    )
}

export default Contact;