
import './EmailSend.css';

import { sendEmailFunction } from '../../services/nodemailer'



export function EmailSend() {



const players = ['cellort567@gmail.com', 'contatomarceloalmeidabarbosa@gmail.com', 'fredy345.almenara@gmail.com'];

const subject = 'Teste envio de emails com nodejs e nodemailer';
const text = 'Texto de exemplo para ser enviado'


    return (
        <div className="email-send-main-container">
            <div className="email-send-container">
                <h1 className="email-send-title">Enviar emails aos participantes</h1>
                <form className="emailsend-form">

                </form>
                <button className="email-send-test" onClick={sendEmailFunction(subject, text, players)}>Enviar</button>
            </div>
        </div>
    )
}