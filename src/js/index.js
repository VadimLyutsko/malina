import sendRequest from './modules/fetch.js';

const requestURL = 'http://localhost:3000/aboutUsData';

let res = await sendRequest(requestURL); // получение данных по запросу

const itemsPerPage = 5; // количество строк при пагинации
let currentPage = 1; // и начальная страница

// Сортируем полученные данные по пункту из select
const sortSelect = document.getElementById('sortSelect');

function sortArray() {
  const selectedValue = sortSelect.value;

  function sortByText(a, b) {
    a = a
      .toLowerCase()
      .split('')
      .filter((a) => {
        return a != '(' && a != ')' && a != ' ' && a != '-';
      })
      .join('');
    b = b
      .toLowerCase()
      .split('')
      .filter((a) => {
        return a != '(' && a != ')' && a != ' ' && a != '-';
      })
      .join('');
    if (a < b) return -1;
    if (a > b) return 1;
  }

  // сразу на месте
  switch (selectedValue) {
    case 'name':
      res.sort((a, b) => sortByText(a.name, b.name));
      break;
    case 'phone':
      res.sort((a, b) => sortByText(b.phone, a.phone));
      break;
    case 'company':
      res.sort((a, b) => sortByText(a.company, b.company));
      break;
    case 'email':
      res.sort((a, b) => sortByText(a.email, b.email));
      break;
    case 'country':
      res.sort((a, b) => sortByText(a.country, b.country));
      break;
    case 'status':
      res.sort((a, b) => sortByText(a.status, b.status));
      break;

    default:
      break;
  }
}

sortSelect.addEventListener('change', function () {
  sortArray();
  updatePagination();
});

sortArray(); // Initial sort when page loads

//  поиск по сформированной таблице
const data = [...res]; // * для того, чтобы не перезатирать данные

const searchInput = document.getElementById('searchInput');

function searchArray() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      item.company.toLowerCase().includes(searchTerm) ||
      item.phone.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.country.toLowerCase().includes(searchTerm) ||
      item.status.toLowerCase().includes(searchTerm)
    );
  });

  res = filteredData; // *
}

searchInput.addEventListener('input', function () {
  searchArray();
  updatePagination();
});

searchArray(); // Initial search when page loads

// функция для отображения данных
function displayData(startIndex, endIndex) {
  document.getElementById('from').textContent = res.length === 0 ? 0 : startIndex + 1;
  document.getElementById('to').textContent = endIndex;
  document.getElementById('of').textContent = res.length;
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<div class="information-line">
         <p class="information-line__name">${res[i].name}</p>
         <p class="information-line__company">${res[i].company}</p>
         <a class="information-line__phone" href="tel:${res[i].email}">${res[i].phone}</a>
        <a class="information-line__email" href="mailto:${res[i].email}">${res[i].email}</a>
         <p class="information-line__country">${res[i].country}</p>
        <p class="information-line__status"> <span class="${res[i].status === 'Active' ? 'Active' : 'Inactive'}">${res[i].status}</span></p>
       </div>`;
    dataContainer.classList = 'animate__animated animate__flash';
    dataContainer.appendChild(itemElement);
  }
}

// функция для отображения пагинации
function renderPagination() {
  const totalPages = Math.ceil(res.length / itemsPerPage);
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';

  const prevButton = document.createElement('button');
  prevButton.textContent = '<';
  prevButton.classList = 'prevButton';
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });
  paginationElement.appendChild(prevButton);

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    const firstButton = document.createElement('button');
    firstButton.textContent = '1';
    firstButton.classList = 'firstButton';
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      updatePagination();
    });
    paginationElement.appendChild(firstButton);

    if (startPage > 2) {
      const ellipsisStart = document.createElement('span');
      ellipsisStart.textContent = '...';
      ellipsisStart.classList = 'ellipsis';
      paginationElement.appendChild(ellipsisStart);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    if (i === currentPage) {
      li.classList.add('active');
    }
    li.addEventListener('click', () => {
      currentPage = i;
      updatePagination();
    });
    paginationElement.appendChild(li);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsisEnd = document.createElement('span');
      ellipsisEnd.textContent = '...';
      ellipsisEnd.classList = 'ellipsis';
      paginationElement.appendChild(ellipsisEnd);
    }

    const lastButton = document.createElement('button');
    lastButton.textContent = totalPages;
    lastButton.classList = 'lastButton';
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      updatePagination();
    });
    paginationElement.appendChild(lastButton);
  }

  const nextButton = document.createElement('button');
  nextButton.textContent = '>';
  nextButton.classList = 'nextButton';
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });
  paginationElement.appendChild(nextButton);
}

// функция для обновления данных при взаимодействии с пагинацией
function updatePagination() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, res.length);
  displayData(startIndex, endIndex);
  renderPagination();
}

updatePagination(); // Initial search when page loads
