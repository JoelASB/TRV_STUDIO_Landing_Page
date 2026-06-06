// Importamos las imágenes locales ubicadas en la carpeta 'assets'
// Esto permite que el empaquetador (Vite/Webpack) las procese correctamente para producción.
import imgUltimate from '../assets/Products_Images/Portada_Ultimate_3D_Platformer_MenuSystem.jpg';
import imgStone from '../assets/Products_Images/Portada_Irregular_Stone_Floor.jpg';
import imgIceLava from '../assets/Products_Images/Portada_Lava_and_Ice.jpg';
import imgHDRIRockForest from '../assets/Products_Images/Portada_HDRI_Rock_Forest.jpg';
import imgDryGrass from '../assets/Products_Images/Portada_Dry_Patchy_Grass_Ground.jpg';
import imgValleyGrass from '../assets/Products_Images/Portada_Valley_Grass_Ground.jpg';
import imgGravelGray from '../assets/Products_Images/Portada_Gravel_Gray.jpg';
import imgReddishSoil from '../assets/Products_Images/Portada_Reddish_Soil_Ground.jpg';
import imgTerrainNaturePack from '../assets/Products_Images/Portada_Terrain_Nature_Mat_Pack.jpg';
import imgEnvironmentMatPack from '../assets/Products_Images/Portada_Environment_Mat_Pack.jpg';
import imgCeramicPack from '../assets/Products_Images/Portada_Ceramics_Materials.jpg';
import imgMarbleCeramics from '../assets/Products_Images/Portada_Marble_Ceramic.jpg';
import imgNaturalCeramics from '../assets/Products_Images/Portada_Natural_Ceramic.png';
import imgArmchairAndTable from '../assets/Products_Images/Portada_Single_armchair_and_small_table.jpg';
import imgBlackBookshelf from '../assets/Products_Images/Portada_Black_Bookshelf.jpg';
import imgClothRedRhombus from '../assets/Products_Images/Portada_Cloth_Red_Rhombus.jpg';
import imgConcreteBrick from '../assets/Products_Images/Portada_Concrete_Brick.jpg';
import imgDirthFloor from '../assets/Products_Images/Portada_Dirth_Floor_Mat.jpg';
import imgIce from '../assets/Products_Images/Portada_Ice.jpg';
import imgIgneousStone from '../assets/Products_Images/Portada_Igneous_Stone.jpg';
import imgJeanBlue from '../assets/Products_Images/Portada_Jean_Blue.jpg';
import imgLava from '../assets/Products_Images/Portada_Lava.jpg';
import imgLightConcrPlastSnow from '../assets/Products_Images/Portada_Light_Concret_Plaster_and_Snow.jpg';
import imgRoughBrick from '../assets/Products_Images/Portada_Rough_brick.jpg';
import imgRusticWood from '../assets/Products_Images/Portada_Rustic_Wood.jpg';
import imgStoneVoronoiBrown from '../assets/Products_Images/Portada_Stone_Voronoi_Brown.jpg';
import imgWoodPlanks from '../assets/Products_Images/Portada_Wood_Planks.jpg';


const categoryIcons = {
    "Assets3D": "Assets 3D",
    "Blueprints": "Blueprints",
    "Materials": "Materials",
    "UI/UX": "UI/UX",
    "HDRIs": "HDRI",
};


// 'featuredOffers' es un arreglo de objetos. Lo exportamos para poder importarlo en otros archivos (como Offers.jsx).
// Aquí almacenamos toda la información de los productos en oferta.
export const featuredOffers = [];

// Placeholder data for the general catalog
// Catálogo principal de productos (Portafolio)
// Hemos agregado los 24 enlaces a la tienda Fab que proporcionaste.
// Nota: Puedes cambiar los títulos, descripciones y añadir imágenes (mediaSrc) más adelante.
export const catalogProducts = [
    {
        id: 1,
        title: "Ultimate 3D Platformer & Menu System Template",
        category: categoryIcons.Blueprints,
        fabUrl: "https://www.fab.com/listings/2fbff310-ad58-4962-81ca-c940214f6f24",
        mediaSrc: imgUltimate,
        description: "Sistema completo de plataformas 3D con menús profesionales."
    },
    {
        id: 2,
        title: "Irregular Stone Mat Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/194db607-0256-4db2-9b12-44460367d846",
        mediaSrc: imgStone,
        description: "Pack de texturas de piedra irregular para entornos 3D."
    },
    {
        id: 3,
        title: "Ice and Lava",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/5fc9dbb4-0c3c-4115-8fa5-8d074725f3b6",
        mediaSrc: imgIceLava,
        description: "Assets de hielo y lava para tus proyectos."
    },
    {
        id: 101,
        title: "Dry Patchy Grass Ground",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/a1bf290b-d62f-43d0-b5a0-852479a1541e",
        mediaSrc: imgDryGrass,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 102,
        title: "Gravel Gray Ground",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/46d87e33-3847-4089-9494-b37b6f6ac6a1",
        mediaSrc: imgGravelGray,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 103,
        title: "Reddish Soil Ground",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/8ae17a69-0408-482b-b944-e447336ee0c4",
        mediaSrc: imgReddishSoil,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 104,
        title: "Single armchair and small table",
        category: categoryIcons.Assets3D,
        fabUrl: "https://www.fab.com/listings/2ccacdc1-70e1-4613-8198-a32bbfea59d6",
        mediaSrc: imgArmchairAndTable,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 105,
        title: "Black Bookshelf",
        category: categoryIcons.Assets3D,
        fabUrl: "https://www.fab.com/listings/0937e09f-386c-4f1d-b2cf-8ec71c606020",
        mediaSrc: imgBlackBookshelf,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 106,
        title: "Valley Grass Ground",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/0f196772-2dbb-4d8c-a249-ab560c853400",
        mediaSrc: imgValleyGrass,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 107,
        title: "Terrain Nature Mat Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/60b73135-fed4-4521-b386-9cd2eeb6f547",
        mediaSrc: imgTerrainNaturePack,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 108,
        title: "Ceramic Floor Texture Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/351fa70b-4df6-4f31-83be-555caf4c0bf2",
        mediaSrc: imgCeramicPack,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 109,
        title: "Natural Ceramics Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/7aac15a7-aa3a-4fe6-8715-048aa9ce17a7",
        mediaSrc: imgNaturalCeramics,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 110,
        title: "Marble Ceramic Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/d1d81434-f996-4fe8-aefe-11e79ddbd794",
        mediaSrc: imgMarbleCeramics,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 111,
        title: "Environment Mat Pack",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/afec1c68-53a7-4728-80f1-25b5a3da2e17",
        mediaSrc: imgEnvironmentMatPack,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 112,
        title: "Jean Blue",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/06790cbf-1402-4ef8-abbb-6fb36e777d62",
        mediaSrc: imgJeanBlue,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 113,
        title: "Cloth Red Rhombus",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/c6a824ff-fdd5-44f7-91f7-57347e6d9d35",
        mediaSrc: imgClothRedRhombus,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 114,
        title: "Wood Planks",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/9f7bd608-04f5-402a-b3de-211232bfc606",
        mediaSrc: imgWoodPlanks,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 115,
        title: "Rustic Wood",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/d23bba43-d198-404a-aa05-4f51993d89b8",
        mediaSrc: imgRusticWood,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 116,
        title: "Stone Voronoi Brown",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/55ac916c-5be9-4d45-851b-e08427042e1b",
        mediaSrc: imgStoneVoronoiBrown,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 117,
        title: "Lava",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/9639f9e9-ff74-42c1-a9e8-e597bb5e233d",
        mediaSrc: imgLava,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 118,
        title: "Igneous Stone",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/2cc585da-5657-43df-8e44-b0d61c7dccbf",
        mediaSrc: imgIgneousStone,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 119,
        title: "Ice",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/5b199c06-5c04-4f63-8aff-01dee5db273d",
        mediaSrc: imgIce,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 120,
        title: "Concrete Brick",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/cb91df5a-3e12-4fd2-8559-0dd083cd2e81",
        mediaSrc: imgConcreteBrick,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 121,
        title: "Rough Brick",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/1c78fecb-9b10-4c86-8808-ff517f312e78",
        mediaSrc: imgRoughBrick,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 122,
        title: "Light Concret, plaster and snow.",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/91a67310-1527-4e7c-a634-a8ab58774003",
        mediaSrc: imgLightConcrPlastSnow,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 123,
        title: "Dirth Floor Mat",
        category: categoryIcons.Materials,
        fabUrl: "https://www.fab.com/listings/9302f9b4-08ea-4474-ad1b-46ba5a940e8e",
        mediaSrc: imgDirthFloor,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    },
    {
        id: 124,
        title: "HDRI Rock Valley",
        category: categoryIcons.HDRIs,
        fabUrl: "https://www.fab.com/listings/02eea97e-8b4f-4749-bb60-6a2410d989bf",
        mediaSrc: imgHDRIRockForest,
        description: "Proyecto premium de TRV Studio. Visita el enlace para más detalles."
    }
];