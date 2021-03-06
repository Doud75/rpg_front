// Initialisation des objets pnj
let secretary = new Pnj("Secrétaire", 'character_profile/secretary.png', [130, 126]);
let barRegular = new Pnj("Habitué du bar", 'character_profile/bar_regular.png', [300, 300]);
let engineer = new Pnj("Ingénieur fou", 'character_profile/engineer.png', [400, 250]);
let childhoodFriend = new Pnj("Ami d'enfance", 'character_profile/childhood_friend.png', [675, 475]);
let plantJanitor = new Pnj("Gardien d'usine", 'character_profile/plant_janitor.png', [600, 375]);
let elder = new Pnj("Ancien du village", 'character_profile/elder.png', [600, 226]);
let mayorWife = new Pnj("Femme du maire", 'character_profile/mayor_wife.png', [675, 450]);
let foreigner = new Pnj("L'étrangère", 'character_profile/foreigner.png', [500, 506]);
let reader = new Pnj("Lectrice de polar", 'character_profile/reader.png', [650, 376]);
let librarian = new Pnj("Bibliothécaire", 'character_profile/librarian.png', [300, 456]);
let policeFriend = new Pnj("Policier ami", 'character_profile/police_friend.png', [90, 326]);
let maleCitizen = new Pnj("Villageois", 'character_profile/male_citizen.png', [180, 156]);
let femaleCitizen = new Pnj("Villageoise", 'character_profile/female_citizen.png', [350, 150]);

// (pnj porte pour dialogue)
let libraryBackDoor = new Pnj("Arrière bibliothèque", '', [750, 430])

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profile/police.png', [12, 126]);

function pnjCityPosition() {
}

function pnjCoffeePosition() {
    ctxBackground.drawImage(maleCitizen.character, 0, 122,frameWidth*scaleDivider, frameHeight*scaleDivider, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)

    ctxBackground.drawImage(elder.character, 0, 130,frameWidth, frameHeight, elder.position[0], elder.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

    ctxBackground.drawImage(policeFriend.character, 0, 192,frameWidth, frameHeight, policeFriend.position[0], policeFriend.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

    ctxBackground.drawImage(foreigner.character, 0, 0,frameWidth, frameHeight, foreigner.position[0], foreigner.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

}

function pnjParcPosition() {
    ctxBackground.drawImage(femaleCitizen.character, 0, 130,frameWidth, frameHeight, femaleCitizen.position[0], femaleCitizen.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

    ctxBackground.drawImage(childhoodFriend.character, 0, 64,frameWidth, frameHeight, childhoodFriend.position[0], childhoodFriend.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjParcRightPosition() {
    ctxBackground.drawImage(engineer.character, 0, 128,frameWidth, frameHeight, engineer.position[0], engineer.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

    ctxBackground.drawImage(plantJanitor.character, 0, 64,frameWidth, frameHeight, plantJanitor.position[0], plantJanitor.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

}

function pnjParcLeftPosition() {
    ctxBackground.drawImage(mayorWife.character, 0, 0,frameWidth, frameHeight, mayorWife.position[0], mayorWife.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

    ctxBackground.drawImage(secretary.character, 0, 192,frameWidth, frameHeight, secretary.position[0], secretary.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjLibraryFirstMapPosition() {
    ctxBackground.drawImage(librarian.character, 0, 64,frameWidth, frameHeight, librarian.position[0], librarian.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjLibrarySecondMapPosition() {
    ctxBackground.drawImage(reader.character, 0, 64,frameWidth, frameHeight, reader.position[0], reader.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

