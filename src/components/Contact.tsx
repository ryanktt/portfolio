import { Box, Button, Container, Flex, Group, Textarea, TextInput } from '@mantine/core';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { HandleAnimationInView } from '../hooks/handle-animation-in-view';
import Alert, { IAlert } from './UI/Alert';
import SectionTitle from './UI/SectionTitle';

const contactProps = {
	firstName: '',
	lastName: '',
	email: '',
	message: '',
};

export default function Contact() {
	HandleAnimationInView('.contact');
	const [contact, setContact] = useState(contactProps);
	const [alert, setAlert] = useState<IAlert | null>(null);

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const id = 'alert';
		const timeout = 3000;
		try {
			setAlert({ id, type: 'LOADING', title: 'Loading', message: 'Processing your request' });
			const res = await axios.post('https://formspree.io/f/xvoveebe', contact, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (res.status === 200) {
				setAlert({
					id,
					message: 'Your message was succesfully sent',
					title: 'Success',
					type: 'SUCCESS',
					timeout,
				});
			} else {
				setAlert({ id, type: 'ERROR', title: 'Failure', message: 'Fail to send message', timeout });
			}
		} catch {
			setAlert({ id, type: 'ERROR', title: 'Failure', message: 'Fail to send message', timeout });
		}
		setContact(contactProps);
        setTimeout(() => {
			setAlert(null)
		}, timeout + 300);
	};

	return (
		<Box id="contact" className="contact section">
            {alert ? <Alert alert={alert}/> : null}
			<Container size={'sm'} className="container">
				<SectionTitle title="Contact Me" description="Feel free to hit me up anytime"/>
				<form onSubmit={onSubmit}>
					<Flex direction={'column'} gap={'md'}>
						<Group grow wrap='wrap' preventGrowOverflow>
							<TextInput
								size="md"
                                value={contact.firstName}
								required
								label="First Name"
								name="firstName"
								onChange={onChange}
							/>
							<TextInput size="md" value={contact.lastName} label="Last Name" name="lastName" onChange={onChange} />
						</Group>
						<TextInput
							size="md"
							required
                            value={contact.email}
							label="Email"
							type="email"
							name="email"
							onChange={onChange}
						/>
						<Textarea
							size="md"
                            value={contact.message}
							required
							label="Message"
							name="message"
							onChange={onChange}
							autosize
							minRows={4}
						/>
						<Button type='submit' className="button" size="md" radius={'md'}>
							Submit
						</Button>
					</Flex>
				</form>
			</Container>
		</Box>
	);
}
