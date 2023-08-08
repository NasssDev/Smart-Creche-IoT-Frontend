import {LabelPage} from "../components/LabelPage.tsx";
import { TabEvents } from "../components/TabEvents.tsx";

export const Events = () => {
    return (
        <>
            <LabelPage label={"Events"} />
            <div className="flex justify-center h-full">
                <TabEvents/>
            </div>
        </>
    )
}