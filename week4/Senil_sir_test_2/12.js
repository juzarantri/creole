const prompt = require("prompt-sync")();

/// extracting quote and author
function extract(quote){
    const arr = quote.split('"');
    const text = arr[1];
    const author = (arr[2].split("-"));
    return [text,author[1].trim()];
}

const quote = `"The unexamined life is not worth living." - Socrates`
console.log(extract(quote));