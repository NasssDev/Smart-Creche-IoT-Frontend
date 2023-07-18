import {LabelPage} from "../components/LabelPage.tsx";
import { TabEvents } from "../components/TabEvents.tsx";
// import {DegreeBar} from "../components/DegreeBar.tsx";

export const Events = () => {
    return (
        <>
            <LabelPage label={"Events"} />
            <div className="flex justify-center h-screen">
                <TabEvents/>
            </div>
        </>
    )
}