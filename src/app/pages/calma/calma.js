import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startCalma = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 80));
    document.getElementById('content').appendChild(story('Calma', 'animate__rubberBand',
    `<p>
    Te calmas y tratas de deducir que es lo que está atrás de ti cuando escuchas: <audio controls autoplay>
        <source src="../src/assets/fantasma.mp3" type="audio/mpeg">
        Tu navegador no permite este recurso.
    </audio> De forma extraña vuelves a sentir la misma sensación de la mañana. Estás seguro que eso te siguió
    desde tu casa, entonces forcejeas y cuando volteas...
</p>`, [{ text: 'Siguiente', color: 'primary', link: 'mal_final.html' }]));
}

startCalma();