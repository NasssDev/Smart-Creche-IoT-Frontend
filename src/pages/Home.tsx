import {LabelPage} from "../components/LabelPage.tsx";
import {InteractivePlan} from "../components/InteractivePlan.tsx";

export const Home = () => {
    return (
        <>
            <LabelPage label={"Home"} />
            <div id="main" className="grid h-screen mt-10">
                <InteractivePlan />
            </div>
        </>
    )
}
