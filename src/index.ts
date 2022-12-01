import * as compositor from "./compositor/compositor";
import fs from "fs";

async function generateImage(layer: string[]) {
    let res = "";
    let path: string[] = [];

    for(let i = 0; i < layer.length; i++) {
        path[i] = `./layers/${i.toString()}/`;

        for(let j = 0; j < layer[i].length; j++) {
            await compositor.composite("./" + res, path[i] + (j+1).toString() + "_" + layer[i][j], res + layer[i][j]);

            if(res != "") fs.unlinkSync(`./${res}.png`);

            res = res + layer[i][j];
        }
    }
}

generateImage(["C", "27", "3452739492089"]);