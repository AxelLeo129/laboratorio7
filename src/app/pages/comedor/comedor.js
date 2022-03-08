import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startComedor = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 40));
    document.getElementById('content').appendChild(story('Comedor', 'animate__rubberBand',
    `<p>
    Llegas a los restaurantes, te compras un helado. Parece que es un día de mala suerte porque se te cae el
    helado. ¡Lo que faltaba! No solo tu mejor amigo no viene, sino que también se te cae tu comida. <audio
        controls autoplay>
        <source src="../src/assets/ambiente.mp3" type="audio/mpeg">
        Tu navegador no permite este recurso.
    </audio> De forma extraña vuelves a sentir la misma sensación de la mañana.
</p>
<p>
    Al salir escuchas un pequeño gemido, parece que alguien pide ayuda. Entonces te planteas:
</p>`, [{ text: 'Seguir el sonido', color: 'primary', link: 'que.html' },
{ text: 'Ignorarlo y regresar con el grupo.', color: 'secondary', link: 'esperas.html' }]));
}

startComedor();