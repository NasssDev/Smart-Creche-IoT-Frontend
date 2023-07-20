import {LabelPage} from "../components/LabelPage.tsx";
// import {Yaya} from "../components/Yaya.tsx";
import DegreeBar from "../components/sensors/DegreeBar.tsx";
export const Logout = () => {

    return (
        <>
            <LabelPage label={"Logout"}/>
            <div className="flex flex-col h_srceen">
              <DegreeBar />
            </div>
        </>
    )
}