import {LabelPage} from "../components/LabelPage.tsx";
import {DegreeBar} from "../components/DegreeBar.tsx";

export const Events = () => {
    return (
        <>
            <LabelPage label={"Events"} />
            <div className="relative">
                <DegreeBar/>
            </div>
        </>
    )
}