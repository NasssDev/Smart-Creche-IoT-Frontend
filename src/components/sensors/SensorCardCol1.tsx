import {ReactNode} from "react";

export const SensorCardCol1 = ({label, componentToRender}: {label:string, componentToRender: ReactNode}) => {

    return (
        <div className={"w-full h-full p-4 overflow-hidden bg-white rounded-2xl shadow-lg"} >
            <div className="text-left block text-xl font-bold text-gray-800">
                {label}
            </div>
            {componentToRender}
        </div>
    )
}