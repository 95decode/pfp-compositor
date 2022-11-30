import sharp from "sharp";

async function composite() {
    try {
        await sharp("./src/sample/A.png")
        .composite([{
            input: "./src/sample/1_7.png"
        }])
        .toFile("res.png")
    } catch (err) {
        console.log(err);
    }
}

composite();