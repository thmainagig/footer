import { createRoot } from "react-dom/client";

const dname = "Maina";
var year = new Date().getFullYear();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <p>Created by {dname}.</p>
    <p>Copyright {year}.</p>
  </div>
);
