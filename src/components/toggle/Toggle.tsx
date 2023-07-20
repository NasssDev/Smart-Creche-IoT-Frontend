import { MouseEventHandler} from "react";

export default function Toggle({ toggled, onClick }: {toggled:boolean,onClick:MouseEventHandler<HTMLDivElement>}) {
    return (<div className="flex items-center ml-auto ">
        <span className={`text-gray-700 text-2xl font-medium mx-2`}>OFF</span><div className={`border-2 rounded-full ${ toggled ? "border-white" : " border-gray-600 "} `}><div onClick={onClick} className={`toggle${toggled ? "  night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
    </div></div><span className={`text-gray-300 text-2xl font-medium mx-2`}>ON</span>
</div>);
}