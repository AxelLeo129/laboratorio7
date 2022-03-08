import { progress } from "./components/progress";
import { story } from "./components/story";

export const startApp = () => {
    document.getElementById('progress').appendChild(progress('Progreso de la historia:', 10));
    document.getElementById('content').appendChild(story('Inicio', 'animate__bounce',
    `<p>
        Acabas de llegar al zoológico junto a tus compañeros, pero el día de hoy todo parece distinto.
        Hace una horas al despertarte sentiste un aura extraña que te ha seguido hasta la escuela y
        posteriormente
        al zoo...
    </p>
    <p>
        Al instante de bajar del autobus, se escucharon a algunos cuervos chillar. De nuevo has sentido esa
        sensación. <audio controls autoplay loop>
            <source src="../src/assets/ambiente.mp3" type="audio/mpeg">
            Tu navegador no permite este recurso.
        </audio> Sin embargo, no le tomas mucha importancia. Hoy es un día para disfrutar con tus amigos,
        pero,
        anormalmente tu mejor amigo no ha podido asistir a la excursión debido a que se refrió anoche.
    </p>
    <p>
        Ingresas al parque, el profesor le da instrucciones al grupo. Al parecer tienes unos minutos para:
    </p>`, [{ text: 'Ir al baño', color: 'primary', link: 'banio.html' },
            { text: 'Comer algo', color: 'secondary', link: 'comedor.html' },
            { text: 'Ver los primeros animales.', color: 'info', link: 'adelantas.html' },
            { text: 'Esperar', color: 'dark', link: 'esperas.html'}]));
}