import * as compositor from "./compositor/compositor";

//sample
async function foo(layer0: string, layer1: string, layer2: string) {
    let res: string = layer0;

    let path0 = "./layers/0/";
    let path1 = "./layers/1/";
    let path2 = "./layers/2/";

    await compositor.composite((path0+layer0 + ".png"),(path0+layer0 + ".png"), res + ".png");

    for(let i = 0; i < layer1.length; i++) {
        await compositor.composite("./" + res + ".png", path1 + i.toString() + "_" + layer1[i] + ".png", (res + i.toString() + ".png"));
        res = res + i.toString();
    }

    for(let i = 1; i < layer2.length + 1; i++) {
        let sub;
        console.log(i);
        if(i<10) {
            sub = "0" + i.toString();
        } else {
            sub = i.toString();
        }

        await compositor.composite("./" + res + ".png", path2 + sub + "_" + layer2[i-1] + ".png", (res + i.toString() + ".png"));
        res = res + i.toString();
    }
}

foo("A", "13", "1452738492053");