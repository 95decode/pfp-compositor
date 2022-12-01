import sharp from "sharp";

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