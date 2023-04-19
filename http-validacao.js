import fetch from "node-fetch";

async function checaStatus(arrayUrl){

    const arrayStatus = await Promise.all(arrayUrl.map (async url => {
    const res = await fetch(url);
    return res.status;

}))

    return arrayStatus;

}

function geraArraydeUrl (arrayLinks){

    return arrayLinks.map(objetoLink => Object.values (objetoLink).join())
}

async function validaUrl(arrayLinks){

    const links = geraArraydeUrl(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

export default validaUrl;