import { progress } from "../../components/progress";
import { story } from "../../components/story";
import '../../../global.scss';
import 'bootstrap/dist/css/bootstrap.css';

export const startAdelante = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 80));
    document.getElementById('content').appendChild(story('Primeros animales', 'animate__flash',
    `<p>
    Llegas y lo primero que ves son unos leones durmiendo una piedra. Giras y puedes alimentar a las jirafas.
    Llega tu grupo de amigos y juntos se divierten alimentando a las jirafas. Tomas fotos a los anfibios y unas
    selfies en el acuario.
</p>
<p>
    De retepente ves que todos tus amigos comienzan a correr hacia fuera del acuario, tú los siguies inmediatamente...
</p>`, [{ text: 'Siguiente', color: 'primary', link: 'buen_final.html' }]));
}

startAdelante();