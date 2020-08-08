import React from 'react';
import './style.css';

import WhatsAppIcon from '../../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/51006430?s=460&u=9b82ed7a4677ed2159ccc1823317a2fe9c53815a&v=4" alt="user"/>
                        <div>
                            <strong>Felipe M.</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta e explorador das melhores tecnologias do mercado.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={WhatsAppIcon} alt="WhatsAppIcon"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;