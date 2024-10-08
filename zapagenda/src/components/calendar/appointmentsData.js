export const appointments = [
    {
        id: '1',
        type: 'warning', // Encaixe
        description: 'Encaixe - Consulta rápida',
        doctor: 'Dr. Ana Silva',
        patient: 'Carlos Souza',
        date: '2024-10-03',
        time: '09:00',
        reason: 'Dor de cabeça',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Paciente relatando dor de cabeça leve há 3 dias.'
      },
      {
        id: '2',
        type: 'Agendamento', // Agendamento regular
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Maria Santos',
        date: '2024-10-07',
        time: '10:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Paciente com consulta regular para revisão de saúde.'
      },
      {
        id: '3',
        type: 'error', // Cancelado
        description: 'Consulta cancelada',
        doctor: 'Dr. Alice',
        patient: 'João Oliveira',
        date: '2024-10-09',
        time: '11:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Consulta cancelada pelo paciente.'
      },
      {
        id: '4',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Luiza Almeida',
        date: '2024-10-12',
        time: '12:00',
        reason: 'Retorno após cirurgia',
        healthPlan: 'Unimed',
        attachments: ['relatorio-cirurgia.pdf'],
        observations: 'Retorno pós-operatório para avaliação de recuperação.'
      },
      {
        id: '5',
        type: 'warning', // Encaixe
        description: 'Encaixe - Urgência leve',
        doctor: 'Dr. Ana Silva',
        patient: 'Ricardo Pereira',
        date: '2024-10-14',
        time: '13:00',
        reason: 'Febre leve',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Paciente relatando febre moderada e dor muscular.'
      },
      {
        id: '6',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Roberta Lima',
        date: '2024-10-15',
        time: '14:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Consulta regular para check-up geral.'
      },
      {
        id: '7',
        type: 'error', // Cancelado
        description: 'Consulta cancelada',
        doctor: 'Dr. Alice',
        patient: 'André Silva',
        date: '2024-10-18',
        time: '15:00',
        reason: 'Dor de garganta',
        healthPlan: 'SulAmérica',
        attachments: [],
        observations: 'Consulta cancelada pelo paciente no dia anterior.'
      },
      {
        id: '8',
        type: 'Agendamento',
        description: 'Consulta pediátrica',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Gabriel Ferreira',
        date: '2024-10-20',
        time: '16:00',
        reason: 'Avaliação pediátrica',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Primeira consulta pediátrica para avaliação geral.'
      },
      {
        id: '9',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Alice',
        patient: 'Renata Almeida',
        date: '2024-10-23',
        time: '17:00',
        reason: 'Revisão pós-operatória',
        healthPlan: 'Unimed',
        attachments: ['exames-pos-op.pdf'],
        observations: 'Retorno após cirurgia realizada há 3 semanas.'
      },
      {
        id: '10',
        type: 'warning', // Encaixe
        description: 'Encaixe - Avaliação rápida',
        doctor: 'Dr. Ana Silva',
        patient: 'Lucas Mendes',
        date: '2024-10-25',
        time: '18:00',
        reason: 'Avaliação de sintomas leves',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Paciente com sintomas leves de resfriado.'
      },
      {
        id: '11',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Ana Silva',
        patient: 'Juliana Souza',
        date: '2024-11-01',
        time: '09:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Consulta regular para check-up.'
      },
      {
        id: '12',
        type: 'error', // Cancelado
        description: 'Consulta cancelada',
        doctor: 'Dr. Alice',
        patient: 'Henrique Alves',
        date: '2024-11-03',
        time: '10:00',
        reason: 'Dor no joelho',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Consulta cancelada pelo paciente.'
      },
      {
        id: '13',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Ana Costa',
        date: '2024-11-04',
        time: '11:00',
        reason: 'Revisão pós-operatória',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Retorno pós-cirurgia.'
      },
      {
        id: '14',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Paulo Santos',
        date: '2024-11-05',
        time: '12:00',
        reason: 'Check-up',
        healthPlan: 'SulAmérica',
        attachments: [],
        observations: 'Consulta de rotina.'
      },
      {
        id: '15',
        type: 'warning', // Encaixe
        description: 'Encaixe - Consulta rápida',
        doctor: 'Dr. Ana Silva',
        patient: 'Mariana Costa',
        date: '2024-11-06',
        time: '13:00',
        reason: 'Dor nas costas',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Paciente com dor lombar leve.'
      },
      {
        id: '16',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Alice',
        patient: 'Eduardo Alves',
        date: '2024-11-08',
        time: '14:00',
        reason: 'Retorno após tratamento',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Retorno após tratamento para verificar progresso.'
      },
      {
        id: '17',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Mariana Santos',
        date: '2024-11-10',
        time: '15:00',
        reason: 'Consulta geral',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Consulta de rotina para check-up geral.'
      },
      {
        id: '18',
        type: 'error', // Cancelado
        description: 'Consulta cancelada',
        doctor: 'Dr. Ana Silva',
        patient: 'Lucas Rocha',
        date: '2024-11-12',
        time: '16:00',
        reason: 'Dor de cabeça',
        healthPlan: 'SulAmérica',
        attachments: [],
        observations: 'Consulta cancelada pelo paciente.'
      },
      {
        id: '19',
        type: 'warning', // Encaixe
        description: 'Encaixe - Avaliação rápida',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Thiago Lima',
        date: '2024-11-14',
        time: '17:00',
        reason: 'Dor no peito',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Paciente com dor torácica leve. Avaliação rápida.'
      },
      {
        id: '20',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Alice',
        patient: 'Ana Lima',
        date: '2024-11-16',
        time: '18:00',
        reason: 'Consulta geral',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Consulta de rotina para check-up.'
      },{
      id: '21',
      type: 'Agendamento', 
      description: 'Consulta de rotina',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Mateus Oliveira',
      date: '2024-10-03',
      time: '09:00',
      reason: 'Consulta de rotina',
      healthPlan: 'Amil',
      attachments: [],
      observations: 'Paciente com consulta de rotina para revisão.'
    },
    {
      id: '22',
      type: 'warning', // Encaixe
      description: 'Encaixe - Urgência',
      doctor: 'Dr. Ana Silva',
      patient: 'Juliana Pereira',
      date: '2024-10-03',
      time: '10:00',
      reason: 'Febre alta',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Paciente apresentando febre alta e mal-estar.'
    },
    {
      id: '23',
      type: 'error', // Cancelado
      description: 'Consulta cancelada',
      doctor: 'Dr. Alice',
      patient: 'Carlos Souza',
      date: '2024-10-05',
      time: '11:00',
      reason: 'Consulta cancelada',
      healthPlan: 'Bradesco',
      attachments: [],
      observations: 'Consulta cancelada pelo paciente.'
    },
    {
      id: '24',
      type: 'Agendamento',
      description: 'Consulta de retorno',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Beatriz Lima',
      date: '2024-10-07',
      time: '12:00',
      reason: 'Retorno pós-cirurgia',
      healthPlan: 'Unimed',
      attachments: ['relatorio-cirurgia.pdf'],
      observations: 'Retorno pós-operatório para avaliação.'
    },
    {
      id: '25',
      type: 'warning', // Encaixe
      description: 'Encaixe - Avaliação rápida',
      doctor: 'Dr. Ana Silva',
      patient: 'Pedro Ferreira',
      date: '2024-10-09',
      time: '13:00',
      reason: 'Dores nas costas',
      healthPlan: 'SulAmérica',
      attachments: [],
      observations: 'Paciente com dor nas costas, solicita encaixe.'
    },
    {
      id: '26',
      type: 'Agendamento',
      description: 'Consulta de rotina',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Lucas Mendes',
      date: '2024-10-10',
      time: '14:00',
      reason: 'Consulta de rotina',
      healthPlan: 'Amil',
      attachments: [],
      observations: 'Consulta de rotina agendada.'
    },
    {
      id: '27',
      type: 'error', // Cancelado
      description: 'Consulta cancelada',
      doctor: 'Dr. Alice',
      patient: 'Thiago Ferreira',
      date: '2024-10-12',
      time: '15:00',
      reason: 'Consulta de rotina',
      healthPlan: 'Bradesco',
      attachments: [],
      observations: 'Consulta cancelada.'
    },
    {
      id: '28',
      type: 'Agendamento',
      description: 'Consulta pediátrica',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Gabriela Martins',
      date: '2024-10-12',
      time: '16:00',
      reason: 'Consulta de rotina pediátrica',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Avaliação pediátrica regular.'
    },
    {
      id: '29',
      type: 'Agendamento',
      description: 'Consulta de rotina',
      doctor: 'Dr. Ana Silva',
      patient: 'João Oliveira',
      date: '2024-10-14',
      time: '17:00',
      reason: 'Check-up anual',
      healthPlan: 'SulAmérica',
      attachments: [],
      observations: 'Paciente em consulta de check-up.'
    },
    {
      id: '30',
      type: 'warning', // Encaixe
      description: 'Encaixe - Urgência',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Amanda Ribeiro',
      date: '2024-10-18',
      time: '18:00',
      reason: 'Dor abdominal',
      healthPlan: 'Amil',
      attachments: [],
      observations: 'Paciente relatando dor abdominal intensa.'
    },
    {
      id: '31',
      type: 'Agendamento', 
      description: 'Consulta de rotina',
      doctor: 'Dr. Ana Silva',
      patient: 'Fernanda Lima',
      date: '2024-11-01',
      time: '09:00',
      reason: 'Check-up anual',
      healthPlan: 'Bradesco',
      attachments: [],
      observations: 'Consulta de rotina.'
    },
    {
      id: '32',
      type: 'warning', // Encaixe
      description: 'Encaixe - Consulta rápida',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Patrícia Ferreira',
      date: '2024-11-01',
      time: '10:00',
      reason: 'Febre e dor de garganta',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Paciente solicitou encaixe por febre.'
    },
    {
      id: '33',
      type: 'Agendamento',
      description: 'Consulta de retorno',
      doctor: 'Dr. Ana Silva',
      patient: 'Eduarda Souza',
      date: '2024-11-03',
      time: '11:00',
      reason: 'Retorno após tratamento',
      healthPlan: 'Amil',
      attachments: ['exame-laboratorial.pdf'],
      observations: 'Retorno pós-tratamento para verificar evolução.'
    },
    {
      id: '34',
      type: 'error', // Cancelado
      description: 'Consulta cancelada',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Roberto Oliveira',
      date: '2024-11-05',
      time: '12:00',
      reason: 'Check-up anual',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Consulta cancelada pelo paciente.'
    },
    {
      id: '35',
      type: 'Agendamento',
      description: 'Consulta pediátrica',
      doctor: 'Dr. Alice',
      patient: 'Gabriel Lima',
      date: '2024-11-06',
      time: '13:00',
      reason: 'Avaliação pediátrica',
      healthPlan: 'Bradesco',
      attachments: [],
      observations: 'Consulta de rotina pediátrica.'
    },
    {
      id: '36',
      type: 'Agendamento',
      description: 'Consulta de retorno',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Pedro Martins',
      date: '2024-11-07',
      time: '14:00',
      reason: 'Revisão pós-operatória',
      healthPlan: 'Amil',
      attachments: ['relatorio-cirurgia.pdf'],
      observations: 'Retorno para acompanhamento após cirurgia.'
    },
    {
      id: '37',
      type: 'Agendamento',
      description: 'Consulta de rotina',
      doctor: 'Dr. Ana Silva',
      patient: 'Mariana Silva',
      date: '2024-11-09',
      time: '15:00',
      reason: 'Consulta geral',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Consulta de check-up.'
    },
    {
      id: '38',
      type: 'warning', // Encaixe
      description: 'Encaixe - Consulta rápida',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Rafael Pereira',
      date: '2024-11-10',
      time: '16:00',
      reason: 'Dores musculares',
      healthPlan: 'Bradesco',
      attachments: [],
      observations: 'Paciente solicitou encaixe para avaliação rápida.'
    },
    {
      id: '39',
      type: 'error', // Cancelado
      description: 'Consulta cancelada',
      doctor: 'Dr. Alice',
      patient: 'Ana Costa',
      date: '2024-11-12',
      time: '17:00',
      reason: 'Consulta geral',
      healthPlan: 'Amil',
      attachments: [],
      observations: 'Consulta cancelada pelo paciente.'
    },
    {
      id: '40',
      type: 'Agendamento',
      description: 'Consulta de rotina',
      doctor: 'Dr. Paulo Godoy',
      patient: 'Thiago Oliveira',
      date: '2024-11-14',
      time: '18:00',
      reason: 'Check-up anual',
      healthPlan: 'Unimed',
      attachments: [],
      observations: 'Paciente em consulta de rotina.'
    },{
        id: '41',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Ana Silva',
        patient: 'Matheus Oliveira',
        date: '2024-10-03',
        time: '14:00',
        reason: 'Revisão pós-operatória',
        healthPlan: 'SulAmérica',
        attachments: [],
        observations: 'Paciente em retorno para revisão de cirurgia.'
      },
      {
        id: '42',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Beatriz Souza',
        date: '2024-10-03',
        time: '15:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Paciente com consulta regular de rotina.'
      },
      {
        id: '43',
        type: 'warning',
        description: 'Encaixe - Avaliação rápida',
        doctor: 'Dr. Alice',
        patient: 'Roberto Oliveira',
        date: '2024-10-07',
        time: '09:00',
        reason: 'Dor de cabeça',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Paciente com dor de cabeça, solicitação de encaixe.'
      },
      {
        id: '44',
        type: 'Agendamento',
        description: 'Consulta pediátrica',
        doctor: 'Dr. Ana Silva',
        patient: 'Gabriel Lima',
        date: '2024-10-07',
        time: '14:00',
        reason: 'Consulta pediátrica regular',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Avaliação pediátrica anual.'
      },
      {
        id: '45',
        type: 'error',
        description: 'Consulta cancelada',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Joana Ribeiro',
        date: '2024-10-07',
        time: '16:00',
        reason: 'Consulta de rotina',
        healthPlan: 'SulAmérica',
        attachments: [],
        observations: 'Consulta cancelada pelo paciente.'
      },
      {
        id: '46',
        type: 'Agendamento',
        description: 'Consulta de retorno',
        doctor: 'Dr. Alice',
        patient: 'Mariana Pereira',
        date: '2024-11-01',
        time: '14:00',
        reason: 'Revisão pós-tratamento',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Paciente em retorno pós-tratamento médico.'
      },
      {
        id: '47',
        type: 'warning',
        description: 'Encaixe - Avaliação rápida',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Ricardo Santos',
        date: '2024-11-01',
        time: '15:00',
        reason: 'Dor muscular',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Paciente solicitando encaixe por dor muscular.'
      },
      {
        id: '48',
        type: 'Agendamento',
        description: 'Consulta pediátrica',
        doctor: 'Dr. Ana Silva',
        patient: 'Fernanda Silva',
        date: '2024-11-01',
        time: '16:00',
        reason: 'Avaliação pediátrica regular',
        healthPlan: 'Amil',
        attachments: [],
        observations: 'Consulta de rotina pediátrica.'
      },
      {
        id: '49',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Alice',
        patient: 'Luiz Santos',
        date: '2024-11-03',
        time: '14:00',
        reason: 'Check-up geral',
        healthPlan: 'Bradesco',
        attachments: [],
        observations: 'Paciente em consulta de check-up geral.'
      },
      {
        id: '50',
        type: 'Agendamento',
        description: 'Consulta de rotina',
        doctor: 'Dr. Paulo Godoy',
        patient: 'Amanda Lima',
        date: '2024-11-03',
        time: '15:00',
        reason: 'Consulta de rotina',
        healthPlan: 'Unimed',
        attachments: [],
        observations: 'Paciente com consulta regular de check-up.'
      }
  ];
  