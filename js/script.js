async function getNodes() {
    const response = await fetch('https://lto.tools/nodes/json', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    return json;
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

// Updates current month in text.
document.getElementsByClassName('current-month')[0].innerHTML = name;

// Counts LTO nodes
(async () => {
    var jsonObject = await getNodes();
    var nodeCount  = Object.keys(jsonObject).length;
    document.getElementsByClassName('lto-node-count')[0].innerHTML = '&nbsp;' + nodeCount;
})()