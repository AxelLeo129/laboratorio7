import { progress } from "../../components/progress";
import { story } from "../../components/story";
import "../../../global.scss";

export const startBuenFinal = () => {
  document
    .getElementById("progress")
    .appendChild(progress("Progreso de la historia:", 100));
  document.getElementById("content").appendChild(
    story(
      "Final", 'animate__rubberBand',
        `<div class="alert alert-success" role="alert">
            <p>Ves una luz al fondo y..... Despiertas. Todo fuel un buen sueño.</p>
            <h5 class="alert-heading">FIN</h5>
        </div>`,
      []
    )
  );
};

startBuenFinal();
