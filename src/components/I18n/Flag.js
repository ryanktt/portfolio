import React from 'react';

// Componente bem simples que recebe uma imagem 
// e se está selecionada ou não (apenas para efeitos visuais)

const Flag = ({ image, isSelected, ...props }) => (
    <div className={isSelected ? 'flag selected' : 'flag'} {...props}><img alt="flag" src={image} /></div>
)

export default Flag