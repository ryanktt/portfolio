import React, {useEffect} from 'react'
import Button from '../components/UI/Button';

const Contact = (props) => {

    useEffect(() => {
        //contact animation
        const contact = document.querySelector('.contact');
    
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].intersectionRatio > 0) {
                contact.classList.add('animate');
            }
        }, {threshold: 0.3})
        observer.observe(contact); 
    }, []);

    return (
        <section id='contact' className='contact-wrapper'>
            <h2>Contate-me</h2>
            <div className='contact'>

                <form>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input id='name' name='name'/>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input id='email' name='email'/>
                    </div>
                    <div className='form-group'>
                        <label>Mensagem</label>
                        <textarea cols='30' rows='10' id='message' name='message'/>
                    </div>
                    <div className='btn'><Button type='submit'>Contatar</Button></div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
