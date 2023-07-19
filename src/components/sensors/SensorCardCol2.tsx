import {Link} from "react-router-dom";
import {WaterLeak} from "./WaterLeak.tsx";

export const SensorCardCol2 = ({label}:{label:string}) => {
    return (
        <div className={"w-full h-full p-4 overflow-hidden bg-white rounded-2xl shadow-lg col-span-2"} >
            <div className="block  flex-col justify-between items-end">
                <span className="text-xl font-bold text-gray-800" >{label}</span> {label === "Water Leak Detection" && <span className="text-sm float-right"><Link to="/events" className="text-crech-blue font-medium" >View more</Link></span>}
            </div>
            <div className="h-60 flex items-center overflow-y-auto" >
                <WaterLeak/>
            </div>
        </div>
    )
}