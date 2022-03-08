import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startLuchar = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 80));
    document.getElementById('content').appendChild(story('Luchas', 'animate__rubberBand',
    `<p>
    Comienzas a forcejear, no logras liberarte. Sin embargo, sigues intentanto hasta que escuchas: <audio controls autoplay>
        <source src="../src/assets/susto.mp3" type="audio/mpeg">
        Tu navegador no permite este recurso.
    </audio> quedas desconcertado. Sigues luchando hasta que te liberas. Te das la vuelta y:
</p>`, [{ text: 'Siguiente', color: 'primary', link: 'mal_final.html' }]));
}

startLuchar();