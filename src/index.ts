import sharp from "sharp";

async function composite() {
    try {
        await sharp("back.png")
        .composite([{
            input: "front.png",
            top: 50,
            left: 50
        }])
        .toFile("resulte.png")
    } catch (err) {
        console.log(err);
    }
}

composite();