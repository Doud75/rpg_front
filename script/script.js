let canvasBackground = document.getElementById('canvas-background');
const ctxBackground = canvasBackground.getContext('2d');

let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



// Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {

    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    // Redessine la hitbox du pnj
    ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
    ctx.fillRect(660, 132, playerFrameWidth, playerFrameHeight)
    // Redessine le pnj
    ctx.drawImage(maleCitizen.character, 0, 128,frameWidth, frameHeight, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
}

let iTalk;

// // Coordonnées du carré bleu porte entre deux zones
// let squareColliderX  = 630
// let squareColliderY  = 0
// let squareColliderWidth  = 100
// let squareColliderHeight  = 15

// Coordonnées du carré bleu entrée du café
let doorCafeColliderX  = 339
let doorCafeColliderY  = 420
let doorCafeColliderWidth  = 43
let doorCafeColliderHeight  = 20

// Coordonnées de l'objet à récupérer
let itemFoundX = 650
let itemFoundY = 330
let itemFoundWidth = 32
let itemFoundHeight = 32

// Définir si l'objet a été récupéré ou non
let itemPicked = false


// let currentMap = 1


// Coordonnées de la hitbox du pnj
let pnjX = 660
let pnjY = 132
let pnjWidth = frameWidth - 20
let pnjHeight = frameHeight - 10


// Coordonnées de la hitbox pnj dialogue
let pnjDialogueBoxX = 640
let pnjDialogueBoxY = 126
let pnjDialogueBoxWidth = frameWidth + 20
let pnjDialogueBoxHeight = frameHeight + 10

// Hitbox du pnj pour le dialogue
ctx.fillStyle = "rgba(250, 0, 250, 0.3)";
ctx.fillRect(pnjDialogueBoxX, pnjDialogueBoxY, pnjDialogueBoxWidth, pnjDialogueBoxHeight)


// Quelle touche au dialogue
let whichText;
let pnjTalk;

// Fonction de collision
// function collision(){
    // // Collision changement de zone
    // if(playerPositionX + playerFrameWidth > squareColliderX && playerPositionX < squareColliderX + squareColliderWidth && playerPositionY + playerFrameHeight > squareColliderY && playerPositionY < squareColliderY + squareColliderHeight)
    // {

    //     // Affichage de l'img du background selon le background actuel
    //     if(currentMap == 1) {

    //         ctxBackground.clearRect(0,0,1040,640)
    //         ctxBackground.drawImage(img2, 0, 0,1040,640);

    //         // On replace le personnage et le carré bleu sur la route de la deuxieme image
    //         dx = 280
    //         dy = 560

    //         squareColliderX  = 250
    //         squareColliderY  = 630

    //         currentMap = 2

    //     } else if(currentMap == 2) {

    //         ctxBackground.clearRect(0,0,1040,640)
            
    //         ctxBackground.drawImage(img, 0, 0,1440,1440);

    //         // On replace le personnage et le carré bleu sur la route de la deuxieme image
    //         dx = 630
    //         dy = 15

    //         squareColliderX  = 630
    //         squareColliderY  = 0
    //         currentMap = 1
    //     }
        


    // }

    // // Collision de la porte du café
    // if(dx+15 + playerFrameWidth > doorCafeColliderX && dx+15 < doorCafeColliderX +doorCafeColliderWidth && playerPositionY + playerFrameHeight > doorCafeColliderY && playerPositionY < doorCafeColliderY + doorCafeColliderHeight)
    // {
    //     console.log("cafe");

    //     // Affichage de l'img du background selon le background actuel
    //     if(currentMap == 1) {

    //         ctxBackground.clearRect(0,0,1040,640)
    //         ctxBackground.drawImage(img3, 0, 0,1040,640);

    //         // On replace le personnage et le carré bleu sur la route de la deuxieme image
    //         dx = 480
    //         dy = 500

    //         doorCafeColliderX  = 480
    //         doorCafeColliderY  = 600

    //         currentMap = 3

    //     } else if(currentMap == 3) {

    //         ctxBackground.clearRect(0,0,1040,640)
    //         ctxBackground.drawImage(img, 0, 0,1440,1440);

    //         // On replace le personnage et le carré bleu sur la route de la deuxieme image
    //         dx = 339
    //         dy = 450

    //         doorCafeColliderX  = 339
    //         doorCafeColliderY  = 420
    //         currentMap = 1
    //     }
    

    // // Collision de l'item jaune
    // if(dx+15 + frameWidth-30 > itemFoundX && dx+15 < itemFoundX + itemFoundWidth && dy+5 + playerFrameHeight > itemFoundY && dy+5 < itemFoundY + itemFoundHeight && !itemPicked)
    // {
    //     player.newItem("carré")
    //     console.log("Objet trouvé");
    //     console.log(player.inventory);
    //     itemPicked = true
    
    // }

    // Collision du pnj
    // if(dx+15 + frameWidth-30 > pnjDialogueBoxX && dx+15 < pnjDialogueBoxX + pnjDialogueBoxWidth && dy+5 + playerFrameHeight > pnjDialogueBoxY && dy+5 < pnjDialogueBoxY + pnjDialogueBoxHeight) {
    //      // Afficher le dialogue du pnj à la collision
    //      pnjTalk = "Voulez-vous discuter avec " + maleCitizen.name + " ? (enter)"
    //      maleCitizen.textZone(pnjTalk)

    //      // Quand on clique sur entrée, le dialogue se créé
    //      window.onkeydown = event => {
    //          switch(event.key) {
    //              case "Enter":
    //                  whichText = true
    //                  console.log("ok");
    //                  return
    //              default:
    //                  console.log("Non");
    //          }
    //      }
        
    //      // Affiche le dialogue
    //      if (whichText == true) {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height)
    //         console.log("oui");
    //         pnjTalk = "Holaaaaaa"
    //         maleCitizen.textZone(pnjTalk)
    //      }

    //      // Pour effacer le texte 
    //      whichText = false


    //     if(dx+15 + frameWidth-30 > pnjX && dx+15 < pnjX + pnjWidth && dy+5 + playerFrameHeight > pnjY && dy+5 < pnjY + pnjHeight) {

    //         console.log("Collision pnj");

    //         // en cas de collision on inverse la vitesse pour qu'il puisse est bloqué sur place
    //         if (moveCharacter === "up") {
    //             dy += speed
        
    //             // Va permettre de définir la direction du mouvement
    //             sy = directionUp * frameHeight;
    //             body.onkeyup = event => {
    //                 stopMovingCharacter(directionUp);
    //             }
    //         } 
    //         else if (moveCharacter === "down") {
    //             dy -= speed
    //             sy = directionDown * frameHeight;
    //             body.onkeyup = event => {
    //                 stopMovingCharacter(directionDown);
    //             } 
    //         }
        
    //         else if (moveCharacter === "left") {
    //             dx += speed
    //             sy = directionLeft * frameHeight;
    //             body.onkeyup = event => {
    //                 stopMovingCharacter(directionLeft);
    //             }
    //         }
    //         else if (moveCharacter === "right") {
    //             dx -=speed
    //             sy = directionRight * frameHeight;
    //             body.onkeyup = event => {
    //                 stopMovingCharacter(directionRight);
    //             }
    //         }
    //     }
    // }


if(!itemPicked){
    // Dessin d'une forme pour test la hitbox de l'item
    ctx.fillStyle = "rgba(250, 250, 0, 0.6)";
    ctx.fillRect(itemFoundX,itemFoundY,itemFoundWidth,itemFoundHeight)
}

// Hitbox du pnj pour le dialogue
ctx.fillStyle = "rgba(250, 0, 250, 0.3)";
ctx.fillRect(pnjDialogueBoxX, pnjDialogueBoxY, pnjDialogueBoxWidth, pnjDialogueBoxHeight)


// Test dialogue sous condition

if(dx <= 50) {
    iTalk = "j'me casse"
} else if(dx <= 200 && dx > 50) {
    iTalk = "c'est nul ici"
} else if(dx > 200) {
    iTalk = "elle sont où les meufs?"
}


player.textZone(iTalk, dx, dy);
// Fin du test dialogue sous condition

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {

    if(!itemPicked){
        // Dessin d'une forme pour test la hitbox de l'item
        ctx.fillStyle = "rgba(250, 250, 0, 0.6)";
        ctx.fillRect(itemFoundX,itemFoundY,itemFoundWidth,itemFoundHeight)
    }

    // Redessine le pnj
    ctx.drawImage(maleCitizen.character, 0, 128,frameWidth, frameHeight, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)

    // Hitbox du pnj pour le dialogue
    ctx.fillStyle = "rgba(250, 0, 250, 0.3)";
    ctx.fillRect(pnjDialogueBoxX, pnjDialogueBoxY, pnjDialogueBoxWidth, pnjDialogueBoxHeight)


    sx = 0;
    sy = whichDirection * frameHeight;
    // On dessine la hitbox du perso

    ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
    ctx.fillRect(playerPositionX, playerPositionY, playerFrameWidth, playerFrameHeight);
    
}

// ctxBackground.drawImage(img3, 0, 0,1440,1440);


// // Dessin du background 2 
// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(100,300,100,100)

// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(700,400,100,100)





// fin du test déplacement (les fonctions)



