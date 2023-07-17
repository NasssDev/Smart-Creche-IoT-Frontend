import {LabelPage} from "../components/LabelPage.tsx";
import {SensorCard} from "../components/SensorCard.tsx";

export const Dashboard = () => {
    return (
        <div>
            <LabelPage label={"Dashboard"}/>
            <div className="flex flex-row">
                {
                    [1, 2, 3].map(() => (
                        <SensorCard/>
                    ))
                }
            </div>
        </div>
    )
}