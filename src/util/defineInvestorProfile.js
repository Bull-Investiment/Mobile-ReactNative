export default {
  sum(questions) {
    const { second, third, fourth } = questions;
    let sum = 10;
    
    const thirdQuestionValues = {
      'Sigo o conselho de alguém para realizar um investimento': 5,
      'Invisto em algo que tenho conhecimento': 10,
      'Quero investir no longo prazo sem me importar com a oscilação de mercado': 15
    };

    const fourthQuestionValues = {
      'Menos de um ano': 5,
      'Entre 1 e 5 anos': 10,
      'Entre 5 e 9 anos': 15,
      'Mais de 10 anos': 20
    };

    if (!second) {
      return sum;
    } else {
      sum += 10;
    }

    sum += thirdQuestionValues[third] + fourthQuestionValues[fourth];

    return sum;
  },

  rating(answers) {
    const profile = this.sum(answers);

    if (profile <= 20) {
      return 'Aprendiz';
    } else if (profile <= 30) {
      return 'Conservador';
    } else if (profile <= 35) {
      return 'Moderado';
    } else if (profile <= 40) {
      return 'Arrojado';
    } else {
      return 'Expert';
    }
  }
}