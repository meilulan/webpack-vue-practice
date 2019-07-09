export default function say() {
    console.log("hello webpack!!");
    return new Promise((resolve, reject) => {
        let result = true;
        if (result) {
            resolve('ok');
        } else {
            reject('no no no');
        }
    })
}