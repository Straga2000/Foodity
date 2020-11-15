import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './Components/App'

/* Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// Create
app.post("/products", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Read One
app.get("/products/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Read All
app.get("/products", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Update
app.put("/products/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Delete
app.delete("/products/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Functia de citire din fisierul db.json
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["products"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ products: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}*/

/*function getShop(location, radius, objects, priceDistance) {
    var priceMin = 0;
    var idealShop;
    if (radius < 10) {
        var shops = location.getShops();
        for (const shop in shops) {
            var price = shop.getObjects(objects) + priceDistance;
            if (priceMin < price) {
                priceMin = price;
                idealShop = shop;
            }
        }
        
    }
    return idealShop;
}
*/
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);