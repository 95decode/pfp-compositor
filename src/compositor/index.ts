import sharp from "sharp";
import fs from "fs";

export async function composite(back: string, front: string, res: string) {
    try {
        await sharp(back + ".png")
        .composite([{
            input: (front + ".png")
        }])
        .toFile(res + ".png")
    } catch (err) {
        console.log(err);
    }
}

export async function generateImage(layer: string[]) {
    let res = "";
    let path: string[] = [];

    for(let i = 0; i < layer.length; i++) {
        path[i] = `./layers/${i.toString()}/`;

        for(let j = 0; j < layer[i].length; j++) {
            await composite("./" + res, path[i] + (j+1).toString() + "_" + layer[i][j], res + layer[i][j]);

            if(res != "") fs.unlinkSync(`./${res}.png`);

            res = res + layer[i][j];
        }
    }
}