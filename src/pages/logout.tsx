import {LabelPage} from "../components/LabelPage.tsx";
import Yaya from "../components/Yaya.tsx";
// import {Modal} from "../components/Modal.tsx";
// import DegreeBar from "../components/sensors/DegreeBar.tsx";
export const Logout = () => {

    return (
        <>
            <LabelPage label={"Logout"}/>
            <div className="flex flex-col h_srceen">
              <Yaya temperature={25} minTemperature={0} maxTemperature={40}/>
            </div>
        </>
    )
}