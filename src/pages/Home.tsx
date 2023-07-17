import {LabelPage} from "../components/LabelPage.tsx";
import {InteractivePlan} from "../components/InteractivePlan.tsx";

export const Home = () => {
    return (
        <>
            <div id="main" className="grid h-screen">
                <LabelPage label={"Home"} />
                <InteractivePlan />
            </div>
        </>
    )
}
