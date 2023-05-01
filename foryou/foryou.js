// Utilizado algo meio "messy" para sempre retornar o nome capitalizado
const forYou = name => name ? `Um para ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}, um para mim.` : `Um para você, um para mim.` ;

console.log(forYou("sumeru"))
