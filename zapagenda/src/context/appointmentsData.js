export const appointments = [
  {
    id: "1",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Consulta rápida",
    doutor: "Dr. Ana Silva",
    paciente: "Carlos Souza",
    data: "2024-10-12",
    horario: "09:00",
    razao: "Dor de cabeça",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente relatando dor de cabeça leve há 3 dias.",
  },
  {
    id: "2",
    tipo: "success", // success regular
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Maria Santos",
    data: "2024-10-07",
    horario: "10:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente com consulta regular para revisão de saúde.",
  },
  {
    id: "3",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "João Oliveira",
    data: "2024-10-09",
    horario: "11:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "4",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Paulo Godoy",
    paciente: "Luiza Almeida",
    data: "2024-10-12",
    horario: "12:00",
    reason: "Retorno após cirurgia",
    planoDeSaude: "Unimed",
    anexos: ["relatorio-cirurgia.pdf"],
    observations: "Retorno pós-operatório para avaliação de recuperação.",
  },
  {
    id: "5",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Urgência leve",
    doutor: "Dr. Ana Silva",
    paciente: "Ricardo Pereira",
    data: "2024-10-14",
    horario: "13:00",
    reason: "Febre leve",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente relatando febre moderada e dor muscular.",
  },
  {
    id: "6",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Roberta Lima",
    data: "2024-10-15",
    horario: "14:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Consulta regular para check-up geral.",
  },
  {
    id: "7",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "André Silva",
    data: "2024-10-18",
    horario: "15:00",
    reason: "Dor de garganta",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Consulta cancelada pelo paciente no dia anterior.",
  },
  {
    id: "8",
    tipo: "success",
    descricao: "Consulta pediátrica",
    doutor: "Dr. Paulo Godoy",
    paciente: "Gabriel Ferreira",
    data: "2024-10-20",
    horario: "16:00",
    reason: "Avaliação pediátrica",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Primeira consulta pediátrica para avaliação geral.",
  },
  {
    id: "9",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Alice",
    paciente: "Renata Almeida",
    data: "2024-10-23",
    horario: "17:00",
    reason: "Revisão pós-operatória",
    planoDeSaude: "Unimed",
    anexos: ["exames-pos-op.pdf"],
    observations: "Retorno após cirurgia realizada há 3 semanas.",
  },
  {
    id: "10",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Avaliação rápida",
    doutor: "Dr. Ana Silva",
    paciente: "Lucas Mendes",
    data: "2024-10-25",
    horario: "18:00",
    reason: "Avaliação de sintomas leves",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente com sintomas leves de resfriado.",
  },
  {
    id: "11",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paula Azevedo",
    paciente: "Juliana Souza",
    data: "2024-10-15",
    horario: "09:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Consulta regular para check-up.",
  },
  {
    id: "12",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "Henrique Alves",
    data: "2024-10-15",
    horario: "10:00",
    reason: "Dor no joelho",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "13",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Paulo Godoy",
    paciente: "Ana Costa",
    data: "2024-10-15",
    horario: "10:00",
    reason: "Revisão pós-operatória",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Retorno pós-cirurgia.",
  },
  {
    id: "14",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Paulo Santos",
    data: "2024-11-05",
    horario: "12:30",
    reason: "Check-up",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Consulta de rotina.",
  },
  {
    id: "15",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Consulta rápida",
    doutor: "Dr. Ana Silva",
    paciente: "Mariana Costa",
    data: "2024-11-06",
    horario: "13:00",
    reason: "Dor nas costas",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Paciente com dor lombar leve.",
  },
  {
    id: "16",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Alice",
    paciente: "Eduardo Alves",
    data: "2024-11-08",
    horario: "14:00",
    reason: "Retorno após tratamento",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Retorno após tratamento para verificar progresso.",
  },
  {
    id: "17",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Mariana Santos",
    data: "2024-11-10",
    horario: "15:00",
    reason: "Consulta geral",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Consulta de rotina para check-up geral.",
  },
  {
    id: "18",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Ana Silva",
    paciente: "Lucas Rocha",
    data: "2024-11-12",
    horario: "16:00",
    reason: "Dor de cabeça",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "19",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Avaliação rápida",
    doutor: "Dr. Paulo Godoy",
    paciente: "Thiago Lima",
    data: "2024-11-14",
    horario: "17:00",
    reason: "Dor no peito",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente com dor torácica leve. Avaliação rápida.",
  },
  {
    id: "20",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Alice",
    paciente: "Ana Lima",
    data: "2024-11-16",
    horario: "18:00",
    reason: "Consulta geral",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Consulta de rotina para check-up.",
  },
  {
    id: "21",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Mateus Oliveira",
    data: "2024-10-03",
    horario: "09:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente com consulta de rotina para revisão.",
  },
  {
    id: "22",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Urgência",
    doutor: "Dr. Ana Silva",
    paciente: "Juliana Pereira",
    data: "2024-10-03",
    horario: "10:00",
    reason: "Febre alta",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente apresentando febre alta e mal-estar.",
  },
  {
    id: "23",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "Carlos Souza",
    data: "2024-10-05",
    horario: "11:00",
    reason: "Consulta cancelada",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "24",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Paulo Godoy",
    paciente: "Beatriz Lima",
    data: "2024-10-07",
    horario: "12:00",
    reason: "Retorno pós-cirurgia",
    planoDeSaude: "Unimed",
    anexos: ["relatorio-cirurgia.pdf"],
    observations: "Retorno pós-operatório para avaliação.",
  },
  {
    id: "25",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Avaliação rápida",
    doutor: "Dr. Ana Silva",
    paciente: "Pedro Ferreira",
    data: "2024-10-09",
    horario: "13:00",
    reason: "Dores nas costas",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Paciente com dor nas costas, solicita encaixe.",
  },
  {
    id: "26",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Lucas Mendes",
    data: "2024-10-10",
    horario: "14:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Consulta de rotina agendada.",
  },
  {
    id: "27",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "Thiago Ferreira",
    data: "2024-10-12",
    horario: "15:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta cancelada.",
  },
  {
    id: "28",
    tipo: "success",
    descricao: "Consulta pediátrica",
    doutor: "Dr. Paulo Godoy",
    paciente: "Gabriela Martins",
    data: "2024-10-12",
    horario: "16:00",
    reason: "Consulta de rotina pediátrica",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Avaliação pediátrica regular.",
  },
  {
    id: "29",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Ana Silva",
    paciente: "João Oliveira",
    data: "2024-10-14",
    horario: "17:00",
    reason: "Check-up anual",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Paciente em consulta de check-up.",
  },
  {
    id: "30",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Urgência",
    doutor: "Dr. Paulo Godoy",
    paciente: "Amanda Ribeiro",
    data: "2024-10-18",
    horario: "18:00",
    reason: "Dor abdominal",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente relatando dor abdominal intensa.",
  },
  {
    id: "31",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Ana Silva",
    paciente: "Fernanda Lima",
    data: "2024-11-01",
    horario: "09:00",
    reason: "Check-up anual",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta de rotina.",
  },
  {
    id: "32",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Consulta rápida",
    doutor: "Dr. Paulo Godoy",
    paciente: "Patrícia Ferreira",
    data: "2024-11-01",
    horario: "10:00",
    reason: "Febre e dor de garganta",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente solicitou encaixe por febre.",
  },
  {
    id: "33",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Ana Silva",
    paciente: "Eduarda Souza",
    data: "2024-11-03",
    horario: "11:00",
    reason: "Retorno após tratamento",
    planoDeSaude: "Amil",
    anexos: ["exame-laboratorial.pdf"],
    observations: "Retorno pós-tratamento para verificar evolução.",
  },
  {
    id: "34",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Paulo Godoy",
    paciente: "Roberto Oliveira",
    data: "2024-11-05",
    horario: "12:00",
    reason: "Check-up anual",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "35",
    tipo: "success",
    descricao: "Consulta pediátrica",
    doutor: "Dr. Alice",
    paciente: "Gabriel Lima",
    data: "2024-11-06",
    horario: "13:00",
    reason: "Avaliação pediátrica",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Consulta de rotina pediátrica.",
  },
  {
    id: "36",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Paulo Godoy",
    paciente: "Pedro Martins",
    data: "2024-11-07",
    horario: "14:00",
    reason: "Revisão pós-operatória",
    planoDeSaude: "Amil",
    anexos: ["relatorio-cirurgia.pdf"],
    observations: "Retorno para acompanhamento após cirurgia.",
  },
  {
    id: "37",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Ana Silva",
    paciente: "Mariana Silva",
    data: "2024-11-09",
    horario: "15:00",
    reason: "Consulta geral",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Consulta de check-up.",
  },
  {
    id: "38",
    tipo: "warning", // Encaixe
    descricao: "Encaixe - Consulta rápida",
    doutor: "Dr. Paulo Godoy",
    paciente: "Rafael Pereira",
    data: "2024-11-10",
    horario: "16:00",
    reason: "Dores musculares",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Paciente solicitou encaixe para avaliação rápida.",
  },
  {
    id: "39",
    tipo: "error", // Cancelado
    descricao: "Consulta cancelada",
    doutor: "Dr. Alice",
    paciente: "Ana Costa",
    data: "2024-11-12",
    horario: "17:00",
    reason: "Consulta geral",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "40",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Thiago Oliveira",
    data: "2024-11-14",
    horario: "18:00",
    reason: "Check-up anual",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente em consulta de rotina.",
  },
  {
    id: "41",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Ana Silva",
    paciente: "Matheus Oliveira",
    data: "2024-10-03",
    horario: "14:00",
    reason: "Revisão pós-operatória",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Paciente em retorno para revisão de cirurgia.",
  },
  {
    id: "42",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Beatriz Souza",
    data: "2024-10-03",
    horario: "15:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente com consulta regular de rotina.",
  },
  {
    id: "43",
    tipo: "warning",
    descricao: "Encaixe - Avaliação rápida",
    doutor: "Dr. Alice",
    paciente: "Roberto Oliveira",
    data: "2024-10-07",
    horario: "09:00",
    reason: "Dor de cabeça",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente com dor de cabeça, solicitação de encaixe.",
  },
  {
    id: "44",
    tipo: "success",
    descricao: "Consulta pediátrica",
    doutor: "Dr. Ana Silva",
    paciente: "Gabriel Lima",
    data: "2024-10-07",
    horario: "14:00",
    reason: "Consulta pediátrica regular",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Avaliação pediátrica anual.",
  },
  {
    id: "45",
    tipo: "error",
    descricao: "Consulta cancelada",
    doutor: "Dr. Paulo Godoy",
    paciente: "Joana Ribeiro",
    data: "2024-10-07",
    horario: "16:00",
    reason: "Consulta de rotina",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Consulta cancelada pelo paciente.",
  },
  {
    id: "46",
    tipo: "success",
    descricao: "Consulta de retorno",
    doutor: "Dr. Alice",
    paciente: "Mariana Pereira",
    data: "2024-11-01",
    horario: "14:00",
    reason: "Revisão pós-tratamento",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Paciente em retorno pós-tratamento médico.",
  },
  {
    id: "47",
    tipo: "warning",
    descricao: "Encaixe - Avaliação rápida",
    doutor: "Dr. Paulo Godoy",
    paciente: "Ricardo Santos",
    data: "2024-11-01",
    horario: "15:00",
    reason: "Dor muscular",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente solicitando encaixe por dor muscular.",
  },
  {
    id: "48",
    tipo: "success",
    descricao: "Consulta pediátrica",
    doutor: "Dr. Ana Silva",
    paciente: "Fernanda Silva",
    data: "2024-11-01",
    horario: "16:00",
    reason: "Avaliação pediátrica regular",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Consulta de rotina pediátrica.",
  },
  {
    id: "49",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Alice",
    paciente: "Luiz Santos",
    data: "2024-11-03",
    horario: "14:00",
    reason: "Check-up geral",
    planoDeSaude: "Bradesco",
    anexos: [],
    observations: "Paciente em consulta de check-up geral.",
  },
  {
    id: "50",
    tipo: "success",
    descricao: "Consulta de rotina",
    doutor: "Dr. Paulo Godoy",
    paciente: "Amanda Lima",
    data: "2024-11-03",
    horario: "15:00",
    reason: "Consulta de rotina",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente com consulta regular de check-up.",
  },
  {
    id: "51",
    tipo: "warning", // Encaixe
    descricao: "Consulta de emergência",
    doutor: "Dra. Maria Santos",
    paciente: "Fernanda Silva",
    data: "2024-10-11", // Data de hoje
    horario: "16:30",
    reason: "Emergência: dor abdominal",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente com dor abdominal severa nas últimas 24 horas.",
  },
  {
    id: "52",
    tipo: "success", // Confirmado
    descricao: "Avaliação pós-cirúrgica",
    doutor: "Dr. Carlos Lima",
    paciente: "Rodrigo Andrade",
    data: "2024-10-11", // Data de hoje
    horario: "18:00",
    reason: "Pós-operatório de cirurgia",
    planoDeSaude: "Bradesco Saúde",
    anexos: [],
    observations: "Revisão pós-cirúrgica de 7 dias após cirurgia no joelho.",
  },
  {
    id: "53",
    tipo: "warning", // Encaixe
    descricao: "Consulta de rotina",
    doutor: "Dra. Maria Oliveira",
    paciente: "Ana Paula",
    data: "2024-10-15",
    horario: "10:30",
    reason: "Check-up anual",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Paciente sem queixas, realizar exames de rotina.",
    local: "Sala 102",
  },
  {
    id: "54",
    tipo: "warning", // warningrmação
    descricao: "Exame de sangue",
    doutor: "Dr. João Pedro",
    paciente: "Luiz Fernando",
    data: "2024-10-15",
    horario: "11:15",
    reason: "Rotina",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Levar resultados anteriores para comparação.",
    local: "Laboratório Central",
  },
  {
    id: "55",
    tipo: "success", // Confirmado
    descricao: "Consulta dermatológica",
    doutor: "Dra. Fernanda Sousa",
    paciente: "Patrícia Almeida",
    data: "2024-10-15",
    horario: "12:00",
    reason: "Tratamento de acne",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Avaliar eficácia do tratamento atual.",
    local: "Sala 103",
  },
  {
    id: "56",
    tipo: "warning", // Encaixe
    descricao: "Consulta oftalmológica",
    doutor: "Dr. Marcelo Teixeira",
    paciente: "Bruna Costa",
    data: "2024-10-15",
    horario: "13:45",
    reason: "Verificação de visão",
    planoDeSaude: "Notredame",
    anexos: [],
    observations: "Paciente relata visão embaçada recentemente.",
    local: "Sala 104",
  },
  {
    id: "57",
    tipo: "warning", // warningrmação
    descricao: "Consulta cardiológica",
    doutor: "Dr. Rafael Martins",
    paciente: "Eduardo Silva",
    data: "2024-10-15",
    horario: "14:30",
    reason: "Avaliação de pressão arterial",
    planoDeSaude: "Porto Seguro",
    anexos: [],
    observations: "Paciente com histórico de hipertensão.",
    local: "Sala 105",
  },
  {
    id: "58",
    tipo: "success", // Confirmado
    descricao: "Fisioterapia pós-lesão",
    doutor: "Dra. Gabriela Rocha",
    paciente: "Marcos Vinícius",
    data: "2024-10-15",
    horario: "15:00",
    reason: "Reabilitação de lesão no ombro",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Paciente necessita de exercícios de fortalecimento.",
    local: "Sala 106",
  },
  {
    id: "59",
    tipo: "warning", // Encaixe
    descricao: "Consulta gastroenterológica",
    doutor: "Dr. Leonardo Gomes",
    paciente: "Juliana Pereira",
    data: "2024-10-15",
    horario: "16:15",
    reason: "Dor abdominal persistente",
    planoDeSaude: "Bradesco Saúde",
    anexos: [],
    observations: "Realizar ultrassonografia abdominal.",
    local: "Sala 107",
  },
  {
    id: "60",
    tipo: "warning", // warningrmação
    descricao: "Consulta psiquiátrica",
    doutor: "Dra. Renata Fernandes",
    paciente: "Thiago Santos",
    data: "2024-10-15",
    horario: "17:00",
    reason: "Acompanhamento de ansiedade",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Avaliar progresso da terapia cognitivo-comportamental.",
    local: "Sala 108",
  },
  {
    id: "61",
    tipo: "success", // Confirmado
    descricao: "Consulta endocrinológica",
    doutor: "Dr. Felipe Andrade",
    paciente: "Sofia Lima",
    data: "2024-10-15",
    horario: "18:30",
    reason: "Controle de diabetes",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Ajustar medicação conforme resultados de glicemia.",
    local: "Sala 109",
  },
  {
    id: "62",
    tipo: "success", // warningrmação
    descricao: "Consulta neurologica",
    doutor: "Dr. Gustavo Henrique",
    paciente: "Camila Martins",
    data: "2024-10-15",
    horario: "19:00",
    reason: "Cefaleia frequente",
    planoDeSaude: "Notredame",
    anexos: [],
    observations: "Paciente relatando dores de cabeça intensas há uma semana.",
    local: "Sala 110",
  },
  {
    id: "63",
    tipo: "success", // Confirmado
    descricao: "Consulta de retorno",
    doutor: "Dra. Laura Mendes",
    paciente: "Felipe Costa",
    data: "2024-10-15",
    horario: "09:00",
    razao: "Retorno após cirurgia",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Avaliar cicatrização e realizar exames de imagem.",
    local: "Sala 111",
  },
  {
    id: "64",
    tipo: "error", // Encaixe
    descricao: "Avaliação nutricional",
    doutor: "Dra. Paula Ramos",
    paciente: "Gustavo Lima",
    data: "2024-10-15",
    horario: "09:00",
    razao: "Plano alimentar personalizado",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Elaborar plano alimentar para controle de peso.",
    local: "Sala 112",
  },
  {
    id: "65",
    tipo: "warning", // warningrmação
    descricao: "Exame de ultrassom",
    doutor: "Dr. Henrique Silva",
    paciente: "Isabela Ferreira",
    data: "2024-10-15",
    horario: "09:00",
    razao: "Exame de abdômen",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente deve estar em jejum.",
    local: "Laboratório Central",
  },
  {
    id: "66",
    tipo: "error", // Confirmado
    descricao: "Sessão de fisioterapia",
    doutor: "Dra. Camila Souza",
    paciente: "Lucas Almeida",
    data: "2024-10-15",
    horario: "09:00",
    razao: "Reabilitação de lesão no ombro",
    planoDeSaude: "Bradesco Saúde",
    anexos: [],
    observations: "Iniciar exercícios de fortalecimento e mobilidade.",
    local: "Sala 113",
  },
  {
    id: "67",
    tipo: "warning", // Encaixe
    descricao: "Consulta oftalmológica",
    doutor: "Dr. Rafael Martins",
    paciente: "Mariana Santos",
    data: "2024-10-15",
    horario: "09:00",
    razao: "Ajuste de lentes de contato",
    planoDeSaude: "Notredame",
    anexos: [],
    observations: "Paciente relatando desconforto com lentes atuais.",
    local: "Sala 114",
  },
  {
    id: "68",
    tipo: "error", // warningrmação
    descricao: "Exame de sangue",
    doutor: "Dr. João Pedro",
    paciente: "Luiz Fernando",
    data: "2024-10-15",
    horario: "10:30",
    razao: "Rotina",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Levar resultados anteriores para comparação.",
    local: "Laboratório Central",
  },
  {
    id: "69",
    tipo: "success", // Confirmado
    descricao: "Consulta dermatológica",
    doutor: "Dra. Fernanda Sousa",
    paciente: "Patrícia Almeida",
    data: "2024-10-15",
    horario: "10:30",
    razao: "Tratamento de acne",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Avaliar eficácia do tratamento atual.",
    local: "Sala 115",
  },
  {
    id: "70",
    tipo: "warning", // Encaixe
    descricao: "Consulta cardiológica",
    doutor: "Dr. Rafael Martins",
    paciente: "Eduardo Silva",
    data: "2024-10-15",
    horario: "10:30",
    razao: "Avaliação de pressão arterial",
    planoDeSaude: "Porto Seguro",
    anexos: [],
    observations: "Paciente com histórico de hipertensão.",
    local: "Sala 116",
  },
  {
    id: "71",
    tipo: "warning", // warningrmação
    descricao: "Consulta psiquiátrica",
    doutor: "Dra. Renata Fernandes",
    paciente: "Thiago Santos",
    data: "2024-10-15",
    horario: "10:30",
    razao: "Acompanhamento de ansiedade",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Avaliar progresso da terapia cognitivo-comportamental.",
    local: "Sala 117",
  },
  {
    id: "72",
    tipo: "success", // Informação
    descricao: "Consulta de rotina",
    doutor: "Dr. Carlos Oliveira",
    paciente: "Ana Costa",
    data: "2024-10-16",
    horario: "09:00",
    razao: "Exame de rotina",
    planoDeSaude: "Bradesco Saúde",
    anexos: [],
    observations: "Paciente não apresenta queixas.",
    local: "Sala 105",
  },
  {
    id: "73",
    tipo: "error", // Informação
    descricao: "Emergência clínica",
    doutor: "Dra. Julia Ramos",
    paciente: "Marcos Lima",
    data: "2024-10-16",
    horario: "11:15",
    razao: "Dores abdominais severas",
    planoDeSaude: "Unimed",
    anexos: [],
    observations: "Paciente com dores persistentes há 2 dias.",
    local: "Sala 112",
  },
  {
    id: "74",
    tipo: "warning", // Informação
    descricao: "Consulta pediátrica",
    doutor: "Dr. Pedro Moreira",
    paciente: "Lara Ferreira",
    data: "2024-10-16",
    horario: "10:00",
    razao: "Acompanhamento do desenvolvimento",
    planoDeSaude: "SulAmérica",
    anexos: [],
    observations: "Verificar curva de crescimento.",
    local: "Sala 210",
  },
  {
    id: "75",
    tipo: "success", // Informação
    descricao: "Consulta oftalmológica",
    doutor: "Dra. Isabel Martins",
    paciente: "Ricardo Silva",
    data: "2024-10-16",
    horario: "14:45",
    razao: "Dificuldade de visão",
    planoDeSaude: "Amil",
    anexos: [],
    observations: "Exame para prescrição de óculos.",
    local: "Sala 202",
  },
  {
    id: "76",
    tipo: "warning", // Informação
    descricao: "Consulta ginecológica",
    doutor: "Dra. Clara Souza",
    paciente: "Beatriz Nunes",
    data: "2024-10-16",
    horario: "16:30",
    razao: "Consulta de rotina",
    planoDeSaude: "Bradesco Saúde",
    anexos: [],
    observations: "Paciente relata ciclo irregular.",
    local: "Sala 220",
  },
];
