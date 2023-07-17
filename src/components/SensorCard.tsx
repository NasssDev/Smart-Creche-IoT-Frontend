import {Gauge} from './Gauge.tsx';
export const SensorCard = ({label}: {label:string}) => {
    return (
        <div className="w-5/6 max-w-xs h-5/6 max-h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="text-left block text-xl font-bold text-gray-800">
                    {label}
                </div>
            <Gauge />
        </div>
    )
}