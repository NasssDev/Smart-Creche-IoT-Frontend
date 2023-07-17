import {LabelPage} from "../components/LabelPage.tsx";
import {SensorCard} from "../components/SensorCard.tsx";

export const Dashboard = () => {
    return (
        <div>
            <LabelPage label={"Dashboard"}/>
            <div id="main" className="grid grid-cols-3 mt-10 ">
                {
                    ["CO2", "Humidity", "Temperature", "Humidity", "Temperature"].map((elem) => (
                        <SensorCard label={elem} />
                    ))
                }
            </div>
        </div>
    )
}