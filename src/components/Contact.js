import React, { useEffect, useState } from 'react';
import Button from '../components/UI/Button';
import AlertMsg from '../components/UI/alertMsg';
import Translator from './I18n/Translator';
import axios from 'axios';

const Contact = (props) => {
	const [contact, setContact] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	//alert
	const [alertMsg, setAlertMsg] = useState('');
	const [alertType, setAlertType] = useState('');
	const [animate, setAnimate] = useState('');

	useEffect(() => {
		//contact animation
		const contact = document.querySelector('.contact');

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].intersectionRatio > 0) {
					contact.classList.add('animate');
				}
			},
			{ threshold: 0.3 },
		);
		observer.observe(contact);
	}, []);

	const onChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post('https://formspree.io/f/xvoveebe', contact, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setAnimate(true);
			if (res.status === 200) {
				setAlertMsg('Success');
				setAlertType('success');
			} else {
				setAlertMsg('Failure');
				setAlertType('failure');
			}
		} catch (err) {
			setAnimate(true);
			setAlertMsg('Ocorreu um Erro');
			setAlertType('failure');
		}
		setTimeout(() => {
			setAnimate(false);
		}, 4000);

		setContact({
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		});
	};

	return (
		<section id="contact" className="contact-wrapper">
			<h2>
				<Translator path="contact.title" />
			</h2>
			<div className="contact">
				<AlertMsg type={alertType} animate={animate}>
					{alertMsg}
				</AlertMsg>
				<form onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<label htmlFor="firstName">
							<Translator path="contact.firstName" />
						</label>
						<input
							required={true}
							value={contact.firstName}
							id="firstName"
							name="firstName"
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">
							<Translator path="contact.lastName" />
						</label>
						<input
							required={true}
							value={contact.lastName}
							id="lastName"
							name="lastName"
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">
							<Translator path="contact.email" />
						</label>
						<input
							required={true}
							value={contact.email}
							id="email"
							name="email"
							type="email"
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">
							<Translator path="contact.message" />
						</label>
						<textarea
							required={true}
							value={contact.message}
							cols="30"
							rows="10"
							id="message"
							name="message"
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className="btn">
						<Button type="submit">
							<Translator path="contact.submitContact" />
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
