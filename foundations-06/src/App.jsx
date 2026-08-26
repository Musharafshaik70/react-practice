import { useState } from "react";
import ManualForm from "./ManualForm.jsx";
import HookForm from "./HookForm.jsx";

function App() {
    const [tab, setTab] = useState("manual");

    return (
        <>
            <div>
                <div>
                    <h1>Job Application</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dolore quae fugiat laboriosam
                        quis, quo quasi odit quos laborum saepe, sunt aliquam, quas quidem. Sequi ex nulla pariatur
                        praesentium natus?
                    </p>
                </div>
                <div>
                    <button onClick={() => setTab("manual")}>Manual-Form</button>
                    <button onClick={() => setTab("hookform")}>Hook-Form</button>
                </div>
                <h1>Getting Started in React</h1>
                {tab === "manual" ? <ManualForm /> : <HookForm />}
            </div>
        </>
    );
}

export default App;
