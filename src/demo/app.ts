import * as fdc3 from "../client/index";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('resViewChart').addEventListener('click', async () => {
        const intents = await fdc3.resolve(fdc3.Intents.VIEW_CHART);
        console.log("found some intents", intents);
    });

    document.getElementById('sendViewChart').addEventListener('click', async () => {
        const intent = new fdc3.Intent(fdc3.Intents.VIEW_CHART);
        const res = await intent.send();
        console.log("got send results", res);
    });

});