export const wait = async (miliseconds: any) => {
    await new Promise(resolve => {setTimeout(resolve, miliseconds)});
}
