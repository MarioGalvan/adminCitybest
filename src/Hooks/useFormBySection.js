import { FormCuerpos } from "../components/Forms/FormCuerpos";
import { FormInterlocutores } from "../components/Forms/FormInterlocutores";
import { FormRegiones } from "../components/Forms/FormRegiones";
import { FormSabedorxs } from "../components/Forms/FormSabedorxs";

export const useFormBySection = (section, setshowModal) => {

    switch (section) {
        case 'Interlocutores':
            return <FormInterlocutores setshowModal={setshowModal} />;
        case 'Sabedorxs':
            return <FormSabedorxs setshowModal={setshowModal} />;

        case 'Cuerpos':
            return <FormCuerpos setshowModal={setshowModal} />;

        case 'Regiones':
            return <FormRegiones setshowModal={setshowModal} />;
        default:
    }

}