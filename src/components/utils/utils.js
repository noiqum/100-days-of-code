


export const checkCardFinish = (day) => {
    const linksLength = day.links.length;
    const links = day.links;
    let counter = 0;
    links.map((link) => {
        if (link['done'] === true) {
            return counter++;
        } else {
            return link
        }
    })

    if (counter === linksLength) {
        return true;
    } else {
        return false;
    }
}