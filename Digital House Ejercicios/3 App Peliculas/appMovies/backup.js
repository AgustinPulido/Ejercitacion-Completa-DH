const totalPeliculas = movies.length;
function listas(variable){
	let resultado=[];
	for(let oneMovie of variable){
		resultado+=oneMovie+'\n'
	}
	return resultado
};