export default function say() {
    console.log("hello webpack!!");
    return new Promise((resolve, reject) => {
        let result = true;
        if (result) {
            resolve('promise ok');
        } else {
            reject('promise no no no');
        }
    })
}