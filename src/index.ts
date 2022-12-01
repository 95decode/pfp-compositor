import * as compositor from "./compositor";
import * as uploader from "./uploader";

async function run(layer: string[]) {
    await compositor.generateImage(layer);

    let filename: string = "";

    for(let i = 0; i < layer.length; i++) {
        filename += layer[i];
    }

    console.log("Filename : " + filename + ".png");

    await uploader.upload(filename);
}

run(["C", "27", "3452739772089"]);