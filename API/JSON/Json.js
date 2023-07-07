const shop = {
  owner: "Anower Hussain",
  address: {
    street: "Tarakandi Road",
    HouseNum: 12,
    Block: "3B",
  },
  product: [
    "laptop",
    "computer",
    "monitor",
    "cpu",
    "mouse",
    "keyboard",
    "Head Phone",
    "Phone",
  ],
  reveneu: 120000,
  IsOpen: true,
  IsNew: false,
};
console.log(shop);
// object to string converstion is use to JSON.stringify
const newShop = JSON.stringify(shop);
console.log(newShop);
//string to object coverstion is used to JSON.parse
console.log(JSON.parse(newShop));
