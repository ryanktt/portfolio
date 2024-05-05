import { useTranslation } from 'react-i18next';
import React from 'react';
// useTranslation é um hook
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import ptBrFlag from '../../assets/flags/br.svg';
import enUsFlag from '../../assets/flags/us.svg';
import Flag from './Flag';

const I18n = () => {
	const { i18n } = useTranslation();
	// Instância do i18n

	function handleChangeLanguage(language) {
		// Trocando o idioma na chamada da função
		i18n.changeLanguage(language);
	}

	const selectedLanguage = i18n.language; // Idioma selecionado
	return (
		<div className="flags-container">
			<Flag
				image={ptBrFlag}
				isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
				onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
			/>
			<Flag
				image={enUsFlag}
				isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
				onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
			/>
		</div>
	);
};

export default I18n;
