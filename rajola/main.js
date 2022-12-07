
async function getFile(nom, nombrediv) {
    let myPromise = new Promise(function (resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', nom);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                resolve("File not Found");
            }
        };
        req.send();
    });

    document.getElementById(nombrediv).innerHTML = await myPromise;

}

