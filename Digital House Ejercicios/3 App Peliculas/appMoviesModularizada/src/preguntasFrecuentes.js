const customFunctions = require('../customFunctions');
const archivoPreguntas = customFunctions.leerFaqs();

let infoPreguntas = `\n\n\t Preguntas frecuentes \n\n`;

infoPreguntas += `\n\n\t Total de preguntas: ${archivoPreguntas.total_faqs}\n\n\n`;

for (let faq of archivoPreguntas.faqs){
    infoPreguntas += `\t ${faq.faq_title}\n\n\t ${faq.faq_answer}\n\n\n`
};

module.exports = infoPreguntas;
