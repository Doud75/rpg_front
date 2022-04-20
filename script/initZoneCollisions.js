let cityMapZoneObjectsCollisions = [
    // porte entrée café
    {x:250, y:510, width: 20, height: 30, direction:"coffee"},

    // zone vers parc-right
    {x:1022, y:142, width: 10, height: 50, direction:"parc-right"},

    // zone vers parc left
    {x:-8, y:303, width: 10, height: 50, direction:"parc-left"},
];

let coffeeMapZoneObjectsCollisions = [
    // porte entrée café
    {x:865, y:568, width: 60, height: 10},
];

let parcRightMapZoneObjectsCollisions = [
    // zone vers city
    {x:-16, y:373, width: 16, height: 55, direction:"city"},

    // zone vers parc
    {x:758, y:-7, width: 55, height:16, direction:"parc"},
];

let parcLeftMapZoneObjectsCollisions = [
    // zone vers city
    {x:1022, y:370, width: 16, height: 55, direction:"city"},

    // zone vers parc
    {x:212, y:-7, width: 55, height:16, direction:"parc"},
];

let parcMapZoneObjectsCollisions = [
    // zone vers parc right
    {x:1022, y:290, width: 16, height: 55, direction:"parc-right"},

    // zone vers parc left
    {x:85, y:637, width: 55, height:16, direction:"parc-left"},

    // Porte entrée bibliothèque
    {x:215, y:435, width: 15, height:30, direction:"library"},
    // 
];

let libraryMapZoneObjectsCollisions = [
    {x:130, y:540, width: 125, height: 16, direction:"parc"},
];

let PolicierMapZonePositionCollisions =[{x : OfficerSprite(450,490,350,550), direction:"city"},]
    


let mapsZoneObjectsCollisions = [cityMapZoneObjectsCollisions, coffeeMapZoneObjectsCollisions, parcRightMapZoneObjectsCollisions, parcLeftMapZoneObjectsCollisions, parcMapZoneObjectsCollisions, libraryMapZoneObjectsCollisions];

function drawAllZoneCollisionsBox(){
    ctx.fillStyle = "rgba(0,0,255,0.8)";

    mapsZoneObjectsCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}