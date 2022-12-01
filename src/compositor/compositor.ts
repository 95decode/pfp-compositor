import sharp from "sharp";

export async function composite(back: string, front: string, res: string) {
    try {
        await sharp(back)
        .composite([{
            input: front
        }])
        .toFile(res)
    } catch (err) {
        console.log(err);
    }
}