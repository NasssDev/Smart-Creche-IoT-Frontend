import {SensorCardCol3} from "./sensors/SensorCardCol3.tsx";

export const SiesteTab = ({label}:{label:string}) => {
    return (
        <div className="p-4 col-span-3 shadow-lg">
            <div className="text-left block text-xl font-bold text-gray-800">
                {label}
            </div>
            <div className={"w-full grid grid-cols-4 p-4 overflow-hidden bg-white rounded-2xl col-span-2"}>
                {["CO2", "Humidity", "Temperature", "Brightness"].map((elem, index) => (
                    <SensorCardCol3 key={index} label={elem}/>
                ))}
            </div>
        </div>
        )
}