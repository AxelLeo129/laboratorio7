import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';

export const startMalFinal = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 100));
    document.getElementById('content').appendChild(story('Final', 'animate__shakeX',
    `<div class="alert alert-danger" role="alert">
        <p>Ves una luz al fondo y..... Despiertas. Todo fuel una pesadilla.</p>
        <h5 class="alert-heading">FIN</h5>
    </div>`, []));
}

startMalFinal();