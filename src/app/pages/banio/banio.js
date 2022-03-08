import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startBanio = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 40));
    document.getElementById('content').appendChild(story('Baño', 'animate__pulse',
    `<p>
    Llegas al baño, parece todo normal, por lo que procedes a usarlo. De un instante a otro sientes una fuerte
    brisa que te pone la piel de gallina. <audio controls autoplay>
        <source src="../src/assets/ambiente.mp3" type="audio/mpeg">
        Tu navegador no permite este recurso.
    </audio> De forma extraña vuelves a sentir la misma sensación de la mañana.
</p>
<p>
    Al salir escuchas un pequeño gemido, parece que alguien pide ayuda. Entonces te planteas:
</p>`, [{ text: 'Seguir el sonido', color: 'primary', link: 'luchar.html' },
{ text: 'Ignorarlo y regresar con el grupo.', color: 'secondary', link: 'esperas.html' }]));
}

startBanio();