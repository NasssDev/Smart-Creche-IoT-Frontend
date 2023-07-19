import {LabelPage} from "../components/LabelPage.tsx";
import {SensorCard} from "../components/sensors/SensorCard.tsx";

export const Dashboard = () => {
    return (
        <div>
            <LabelPage label={"Dashboard"}/>
            <div id="main" className="grid gap-10 grid-cols-3 mt-10">
                {
                    ["CO2", "Humidity", "Temperature", "Water Leak Detection", "Brightness"].map((elem,index) => (
                        <SensorCard key={index} label={elem} />
                    ))
                }
            </div>
        </div>
    )
}