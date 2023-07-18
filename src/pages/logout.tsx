import {LabelPage} from "../components/LabelPage.tsx";
import {WaterLeak} from "../components/sensors/WaterLeak.tsx";

export const Logout = () => {
    return (
        <>
            <LabelPage label={"Logout"}/>
            <div className="grid grid-cols-3">
                <WaterLeak/>
            </div>
        </>
    )
}