import React, { FC } from "react";
import {createRoot} from "react-dom/client";

const App: FC = () => {
    return (<div>Aboba</div>)
}

document.body.innerHTML = '<div id="root"></div>'
const rootElement = document.querySelector("#root") as Element
const root = createRoot(rootElement);

root.render(<App/>);
