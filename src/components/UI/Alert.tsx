import { Notification } from '@mantine/core';
import { useEffect, useState } from 'react';

export type IAlertTypes = 'DEFAULT' | 'ERROR' | 'SUCCESS' | 'LOADING';
export interface IAlert {
	id: string;
	type: IAlertTypes;
	message?: string;
	title?: string;
	withCloseBtn?: boolean;
	timeout?: number;
}


export default function Alert({ alert }: { alert: IAlert }) {
	const [visible, setVisible] = useState(true);

	const getAlertColor = (type: IAlertTypes): string => {
		switch (type) {
			case 'SUCCESS':
				return 'green';
			case 'ERROR':
				return 'pink';
			default:
				return 'blue';
		}
	};

	const closeAlert = () => {
		setVisible(false);
	};

	useEffect(() => {
		setVisible(true);
	}, []);

	useEffect(() => {
		if (alert.timeout) {
			setTimeout(() => {
				closeAlert();
			}, alert.timeout);
		}
	}, [alert]);

	return (
		<Notification
			className={`alert ${!visible ? 'alert-hidden' : ''}`}
			radius="md"
			key={alert.id}
			loading={alert.type === 'LOADING'}
			color={getAlertColor(alert.type)}
			role="alert"
			withCloseButton={typeof alert.withCloseBtn === 'boolean' ? alert.withCloseBtn : true}
			withBorder
			title={alert.title}
			onClose={closeAlert}
		>
			{alert.message}
		</Notification>
	);
}
