let canvasBackground = document.getElementById('canvas-background');
const ctxBackground = canvasBackground.getContext('2d');

let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Récupération des images en background (test)
let img = document.getElementById('img')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let imgZoning = document.getElementById('img4')


let body = document.querySelector('body');

// Orientation du personnage, la ligne qui correspond à l'image de base
let directionUp = 0;
let directionLeft = 1;
let directionDown = 2;
let directionRight = 3;

// Mouvement du personnage
let moveCharacter;

// Position où le dessin sera dessiné sur le canvas
let dx = 500;
let dy = 300;

// Vitesse
let speed = 5

// Position de la zone de l'image source (le coin supérieur gauche de la frame)
let sx;
let sy;

// Taille de l'image qui comporte les sprite, width 576/9 = 64 et height 268/4  = 67
let spriteWidth = 576;
let spriteHeight = 268;

// Nombre de frame
let frameCols = 9;
let frameRows = 4;

// Width de chaque frame 
let frameWidth = spriteWidth/frameCols;
let frameHeight = spriteHeight/frameRows;

// Index de la frame
let currentFrame = 0

// Initialisation de l'ojet player
let player = new Player("Adrien", 'character_profile/male_player.png', [dx, dy], ["carte des suspects", "bout de papier"]);//position et inventaire à définir, ajouter des fonctions ect

// Initialisation des objets pnj
let secretary = new Pnj("Secrétaire", 'character_profile/secretary.png', [12, 126]);//position a définir
let barRegular = new Pnj("Habitué du bar", 'character_profile/bar_regular.png', [12, 126]);//position a définir
let engineer = new Pnj("Ingénieur fou", 'character_profile/engineer.png', [100, 100]);//position a définir
let childhoodFriend = new Pnj("Ami d'enfance", 'character_profile/childhood_friend.png', [12, 126]);//position a définir
let plantJanitor = new Pnj("Gardien d'usine", 'character_profile/plant_janitor.png', [12, 126]);//position a définir
let elder = new Pnj("Ancien du village", 'character_profile/elder.png', [12, 126]);//position a définir
let mayorWife = new Pnj("Femme du maire", 'character_profile/mayor_wife.png', [12, 126]);//position a définir
let foreigner = new Pnj("L'étrangère", 'character_profile/foreigner.png', [12, 126]);//position a définir
let reader = new Pnj("Lectrice de polar", 'character_profile/reader.png', [12, 126]);//position a définir
let librarian = new Pnj("Bibliothécaire", 'character_profile/librarian.png', [12, 126]);//position a définir
let policeFriend = new Pnj("Policier ami", 'character_profile/police_friend.png', [12, 126]);//position a définir
let maleCitizen = new Pnj("Villageois", 'character_profile/male_citizen.png', [12,126]);//position a définir
let femaleCitizen = new Pnj("Villageoise", 'character_profile/female_citizen.png', [12, 126]);//position a définir

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profile/police.png', [12, 126]);//position a définir

// Joueur actuel avec lequel on joue
let character = player.characterProfil();

// Test initialisation d'un PNJ
pnj = maleCitizen.characterProfil();
body.onload = function() {
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 500, 126, frameWidth/1.5, frameHeight/1.5)
    // Dessin d'une forme pour test la hitbox de l'item
    ctx.fillStyle = "rgba(250, 250, 0, 0.6)";
    ctx.fillRect(itemFoundX,itemFoundY,itemFoundWidth,itemFoundHeight)
   
}
// Fin du test (pnj)


// Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {
    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    // Redessine le pnj
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 650, 126, frameWidth/1.5, frameHeight/1.5)

    // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
    currentFrame = ++currentFrame % frameCols;
    console.log("frame", currentFrame);

    // Choisir le point de départ de la frame
    sx = currentFrame * frameWidth;

    // Mouvement du personnage selon le choix effectué par l'user
    if (moveCharacter === "up") {
        dy -= speed

        // Va permettre de définir la direction du mouvement
        sy = directionUp * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionUp);
        }
    } 
    else if (moveCharacter === "down") {
        dy += speed
        sy = directionDown * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionDown);
        } 
    }

    else if (moveCharacter === "left") {
        dx -= speed
        sy = directionLeft * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionLeft);
        }
    }
    else if (moveCharacter === "right") {
        dx +=speed
        sy = directionRight * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionRight);
        }
    }
    else if (moveCharacter === "moonWalk") {
        dx += speed
        sy = directionLeft * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionLeft);
        }
    }    
}

let colorRect = "blue"
let iTalk;

// Coordonnées du carré bleu porte entre deux zones
let squareColliderX  = 630
let squareColliderY  = 0
let squareColliderWidth  = 100
let squareColliderHeight  = 15

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

let itemPicked = false


let currentMap = 1

// Coordonnées de la hitbox maison 
let houseHitboxX = 64
let houseHitboxY = 0
let houseHitboxWidth = 368
let houseHitboxHeight = 198

// dessin de la hitbox de la maison
ctx.fillStyle = "rgba(250, 0, 0, 0.1)";
ctx.fillRect(houseHitboxX,houseHitboxY,houseHitboxWidth,houseHitboxHeight)



// Fonction de collision
function collision(){
    // Collision du rect bleu
    if(dx+15 + frameWidth-30 > squareColliderX && dx+15 < squareColliderX + squareColliderWidth && dy+5 + frameHeight-10 > squareColliderY && dy+5 < squareColliderY + squareColliderHeight)
    {
        colorRect = "green";

        // Affichage de l'img du background selon le background actuel
        if(currentMap == 1) {

            ctxBackground.clearRect(0,0,1040,640)
            ctxBackground.drawImage(img2, 0, 0,1040,640);

            // On replace le personnage et le carré bleu sur la route de la deuxieme image
            dx = 280
            dy = 560

            squareColliderX  = 250
            squareColliderY  = 630

            currentMap = 2

        } else if(currentMap == 2) {

            ctxBackground.clearRect(0,0,1040,640)
            
            ctxBackground.drawImage(img, 0, 0,1440,1440);

            // On replace le personnage et le carré bleu sur la route de la deuxieme image
            dx = 630
            dy = 15

            squareColliderX  = 630
            squareColliderY  = 0
            currentMap = 1
        }
        


    } else {
        colorRect = "rgba(0, 0, 250, 0.3)"
    }

    // Collision de la porte du café
    if(dx+15 + frameWidth-30 > doorCafeColliderX && dx+15 < doorCafeColliderX +doorCafeColliderWidth && dy+5 + frameHeight-10 > doorCafeColliderY && dy+5 < doorCafeColliderY + doorCafeColliderHeight)
    {
        console.log("cafe");

        // Affichage de l'img du background selon le background actuel
        if(currentMap == 1) {

            ctxBackground.clearRect(0,0,1040,640)
            ctxBackground.drawImage(img3, 0, 0,1040,640);

            // On replace le personnage et le carré bleu sur la route de la deuxieme image
            dx = 480
            dy = 500

            doorCafeColliderX  = 480
            doorCafeColliderY  = 600

            currentMap = 3

        } else if(currentMap == 3) {

            ctxBackground.clearRect(0,0,1040,640)
            ctxBackground.drawImage(img, 0, 0,1440,1440);

            // On replace le personnage et le carré bleu sur la route de la deuxieme image
            dx = 339
            dy = 450

            doorCafeColliderX  = 339
            doorCafeColliderY  = 420
            currentMap = 1
        }
        


    } else {
        colorRect = "rgba(0, 0, 250, 0.3)"
    }


    // Calcul de la collision avec la maison
    if(dx+15 + frameWidth-30 > houseHitboxX && dx+15 < houseHitboxX + houseHitboxWidth && dy+5 + frameHeight-10 > houseHitboxY && dy+5 < houseHitboxY + houseHitboxHeight){
        console.log("Collision maison");

        // en cas de collision on inverse la vitesse pour qu'il puisse est bloqué sur place
        if (moveCharacter === "up") {
            dy += speed 
    
            // Va permettre de définir la direction du mouvement
            sy = directionUp * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionUp);
            }
        } 
        else if (moveCharacter === "down") {
            dy -= speed 
            sy = directionDown * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionDown);
            } 
        }
    
        else if (moveCharacter === "left") {
            dx += speed 
            sy = directionLeft * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionLeft);
            }
        }
        else if (moveCharacter === "right") {
            dx -=speed 
            sy = directionRight * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionRight);
            }
        }
    }

    // let itemFoundX = 650
    // let itemFoundY = 330
    // let itemFoundWidth = 32
    // let itemFoundHeight = 32

    // Collision de l'item jaune
    if(dx+15 + frameWidth-30 > itemFoundX && dx+15 < itemFoundX + itemFoundWidth && dy+5 + frameHeight-10 > itemFoundY && dy+5 < itemFoundY + itemFoundHeight && !itemPicked)
    {

        console.log("Objet trouvé");
        itemPicked = true
    
    } else {
        colorRect = "rgba(0, 0, 250, 0.3)"
    }

}

// Dessiner le caractère
function drawCharacter() {
    // On update d'abord la frame
    updateFrame();

    // Dessin d'une forme pour test la hitbox de la changement de zone
    ctx.fillStyle = colorRect
    ctx.fillRect(squareColliderX,squareColliderY,squareColliderWidth,squareColliderHeight)

    // Dessin d'une forme pour test la hitbox de la porte de café
    ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
    ctx.fillRect(doorCafeColliderX,doorCafeColliderY,doorCafeColliderWidth,doorCafeColliderHeight)

    // Dessin de la hitbox de la maison
    ctx.fillStyle = "rgba(250, 0, 0, 0.1)";

    ctx.fillRect(houseHitboxX,houseHitboxY,houseHitboxWidth,houseHitboxHeight)

    if(!itemPicked){
        // Dessin d'une forme pour test la hitbox de l'item
        ctx.fillStyle = "rgba(250, 250, 0, 0.6)";
        ctx.fillRect(itemFoundX,itemFoundY,itemFoundWidth,itemFoundHeight)
    }




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
        
    // On dessine la hitbox du perso
    ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
    ctx.fillRect(dx+15, dy+5, frameWidth-30, frameHeight-10)

    // On dessine le caractère
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth/1.5, frameHeight/1.5)
}

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    collision();

    // Dessin d'une forme pour test la hitbox
    ctx.fillStyle = colorRect
    ctx.fillRect(squareColliderX,squareColliderY,squareColliderWidth,squareColliderHeight)

    // Dessin d'une forme pour test la hitbox de la porte de café
    ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
    ctx.fillRect(doorCafeColliderX,doorCafeColliderY,doorCafeColliderWidth,doorCafeColliderHeight)


    // Dessin de la hitbox de la maison
    ctx.fillStyle = "rgba(250, 0, 0, 0.1)";
    ctx.fillRect(houseHitboxX,houseHitboxY,houseHitboxWidth,houseHitboxHeight)

    if(!itemPicked){
        // Dessin d'une forme pour test la hitbox de l'item
        ctx.fillStyle = "rgba(250, 250, 0, 0.6)";
        ctx.fillRect(itemFoundX,itemFoundY,itemFoundWidth,itemFoundHeight)
    }

    // Redessine le pnj
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 650, 126, frameWidth/1.5, frameHeight/1.5)

    sx = 0;
    sy = whichDirection * frameHeight;

    // On dessine la hitbox du perso
    ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
    ctx.fillRect(dx+15, dy+5, frameWidth-30, frameHeight-10)

    // On dessine le caractère
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth/1.5, frameHeight/1.5)
    player.textZone(iTalk, dx, dy);

    
}



body.onkeydown = event => {
    switch(event.key) {
        case "ArrowUp":
            moveCharacter = "up";
            collision();
            drawCharacter();
            break;
            
        case "ArrowDown":
            moveCharacter = "down";
            collision();
            drawCharacter();
            
            break;

        case "ArrowLeft":
            moveCharacter = "left";
            collision();
            drawCharacter();
            break;

        case "ArrowRight":
            moveCharacter = "right";
            collision();
            drawCharacter();
            break;
        case "m":
            moveCharacter = "moonWalk";
            collision();
            drawCharacter();
            break;
    }
}



// Dessin du background 
// ctxBackground.fillStyle = "orange"
// ctxBackground.fillRect(10,30,50,50)
// ctxBackground.fillStyle = "orange"
// ctxBackground.fillRect(500,100,100,100)

// Dessin de l'image de background
ctxBackground.drawImage(imgZoning, 0, 0,1024,640);

// ctxBackground.drawImage(img3, 0, 0,1440,1440);


// // Dessin du background 2 
// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(100,300,100,100)

// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(700,400,100,100)





// fin du test déplacement (les fonctions)



