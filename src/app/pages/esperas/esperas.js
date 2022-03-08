import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startEsperas = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 40));
    document.getElementById('content').appendChild(story('Esperas', 'animate__rubberBand',
    `<p>
    Regresas con tus compañeros y juntos parten a ver las exhibiciones.  
</p>`, [{ text: 'Siguiente', color: 'primary', link: 'adelantas.html' }]));
}

startEsperas();