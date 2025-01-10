import { useTranslation } from 'react-i18next';
import React from 'react';

import ptBrFlag from '../../assets/flags/br.svg';
import enUsFlag from '../../assets/flags/us.svg';
import Flag from './Flag';

const I18n = () => {
	const { i18n } = useTranslation();

	function handleChangeLanguage(language) {
		i18n.changeLanguage(language);
	}

	const selectedLanguage = i18n.language;
	return (
		<div className="flags-container">
			<Flag
				image={ptBrFlag}
				isSelected={selectedLanguage === 'pt-BR'}
				onClick={() => handleChangeLanguage('pt-BR')}
			/>
			<Flag
				image={enUsFlag}
				isSelected={selectedLanguage === 'en-US'}
				onClick={() => handleChangeLanguage('en-US')}
			/>
		</div>
	);
};

export default I18n;
