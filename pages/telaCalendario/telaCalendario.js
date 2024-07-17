document.addEventListener('DOMContentLoaded', function () {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  let currentDate = new Date(2024, 4, 1); // Maio de 2024

  const monthTextElement = document.getElementById('mes-ano-text');
  const daysContainer = document.getElementById('calendar-days');

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    monthTextElement.innerHTML = `${monthNames[
      month
    ].toUpperCase()} DE ${year} <i class="fa-solid fa-chevron-down"></i>`;

    // Limpar os dias atuais
    daysContainer.innerHTML = '';

    // Adicionar os novos dias
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    // Dias do mês anterior
    for (let i = firstDayOfMonth; i > 0; i--) {
      daysContainer.innerHTML += `<div class="calendar-day next-month">${
        lastDayOfPrevMonth - i + 1
      }</div>`;
    }

    // Dias do mês atual
    for (let i = 1; i <= lastDateOfMonth; i++) {
      daysContainer.innerHTML += `<div class="calendar-day">${i}</div>`;
    }

    // Dias do próximo mês
    const totalDays = firstDayOfMonth + lastDateOfMonth;
    const nextMonthDays = totalDays <= 35 ? 42 - totalDays : 49 - totalDays;

    for (let i = 1; i <= nextMonthDays; i++) {
      daysContainer.innerHTML += `<div class="calendar-day next-month">${i}</div>`;
    }
  }

  document.getElementById('prev-month').addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  document.getElementById('next-month').addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  // Renderizar o calendário inicial
  renderCalendar(currentDate);
});
