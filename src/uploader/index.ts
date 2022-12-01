import { NFTStorage, File } from 'nft.storage';
import fs from "fs";

//TODO : Move to env
const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ3ZTQ2M0M2MTZiNGExMEI3RTY0MTE3Q0M3NkYzMDI5N2FERDlCMGUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2OTkwMDA4NTc1NiwibmFtZSI6InRlc3QifQ.sbY7-RsZkwTavxnO4CzGdnwcg9cn4ZpKZqo1JPnZpz8" })

export async function upload(filename: string) {
  const metadata = await client.store({
    name: 'Patent',
    description: filename,
    image: new File([await fs.promises.readFile(filename + ".png")], filename + ".png", {
        type: 'image/png',
      }),
  });

  console.log("Metadata uri : " + metadata.url);
}