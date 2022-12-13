import React from 'react';
import './Thanks.css';
import {
     BsFillEmojiHeartEyesFill,
     BsFillEmojiSmileFill,
     BsFillEmojiNeutralFill,
     BsFillEmojiFrownFill,

} from 'react-icons/bs';

const emojiData = {
     unsatisfied: <BsFillEmojiFrownFill />,
     neutral: <BsFillEmojiNeutralFill />,
     satisfied: <BsFillEmojiSmileFill />,
     very_satisfied: <BsFillEmojiHeartEyesFill />,
}


const Thanks = ({ data }) => {
     return (
          <div className='thanks-container'>
               <h2>Falta pouco...</h2>
               <p>
                    A sua opinião é muito importante, em breve você receberá um cupom de deconto de 20% de desconto para a sua proxíma compra.
               </p>

               <p> Para concluir sua avalião clique no botào de ENVIAR abaixo. </p>

               <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>

               <p className='review-data'>
                    <span>Satisfação com o produto: </span>
                    {emojiData[data.review]}
               </p>

               <p className='review-data'>
                    <span>Comentário: </span>
                    {data.comment}
               </p>
          </div>
     );
}

export default Thanks;