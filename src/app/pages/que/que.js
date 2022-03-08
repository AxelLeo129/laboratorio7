import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startQue = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 80));
    document.getElementById('content').appendChild(story('¡Ayuda!', 'animate__shakeY',
    `<p>
    Sigues el sonido, ves algo extraño a lo lejos, no puedes notar bien lo que al rededor se divisa. Corres
    porque los gritos se hacen más intensos. Al llegar no encuentras nada, sin embargo, notas que algo te toma
    por la espalda. Es una mano muy fría. ¿Qué deberías hacer?
</p>`, [{ text: 'Luchar por liberarte.', color: 'secondary', link: 'luchar.html' },
{ text: 'Calmarte y ver que sucede.', color: 'info', link: 'calma.html' }]));
}

startQue();