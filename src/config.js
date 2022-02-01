const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [

      { name: "Background" },
      { name: "Wheels01" },
      { name: "Body01" },
      { name: "Tinted01" },
      { name: "FrontEnd01" },
      { name: "RoofRear01" },
      { name: "RoofFront01" },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels02" },
      { name: "Body02" },
      { name: "Tinted02" },
      { name: "FrontEnd02" },
      { name: "RoofRear02" },
      { name: "RoofFront02" },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels03" },
      { name: "Body03" },
      { name: "Tinted03" },
      { name: "FrontEnd03" },
      { name: "RoofRear03" },
      { name: "RoofFront03" },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels04" },
      { name: "Body04" },
      { name: "Tinted04" },
      { name: "FrontEnd04" },
      { name: "RoofRear04" },
      { name: "RoofFront04" },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels05" },
      { name: "Body05" },
      { name: "Tinted05" },
      { name: "FrontEnd05" },
      { name: "RoofRear05" },
      { name: "RoofFront05" },
    ],
  },



];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 256,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
