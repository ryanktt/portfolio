import React, {useEffect, useState} from 'react'
import Button from '../components/UI/Button';
import AlertMsg from '../components/UI/alertMsg';
import axios from 'axios';

const Contact = (props) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    //alert
    const [alertMsg, setAlertMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [animate, setAnimate] = useState('')

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

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://formspree.io/f/xvoveebe', contact, {headers: {
            'Content-Type': 'application/json'
        }});
        setAnimate(true)
        if (res.status = 200) {
                setAlertMsg('Sucesso');
                setAlertType('success');
        } else {
                setAlertMsg('Ocorreu um Erro')
                setAlertType('failure');
            
        }
        setTimeout(() => {
            setAnimate(false)
        }, 4000);

        setContact({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        })
    }

    return (
        <section id='contact' className='contact-wrapper'>
            <h2>Contate-me</h2>
            <div className='contact'>
                <AlertMsg  type={alertType} animate={animate}>{alertMsg}</AlertMsg>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <label htmlFor='firstName'>Primeiro Nome</label>
                        <input required={true} value={contact.firstName} id='firstName' name='firstName' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Sobrenome</label>
                        <input required={true} value={contact.lastName} id='lastName' name='lastName' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input required={true} value={contact.email} id='email' name='email' type='email' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Mensagem</label>
                        <textarea required={true} value={contact.message} cols='30' rows='10' id='message' name='message' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='btn'><Button type='submit'>Contatar</Button></div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
