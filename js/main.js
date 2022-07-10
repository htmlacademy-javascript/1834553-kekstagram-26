const NAMES = [
'Алёна',
'Юлия',
'Ульяна',
'Мария',
'Андрей',
'Алексей',
'Максим',
'Иван'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const messagesCount = {
  MIN: 1,
  MAX: 2
};

//Функция возвращающая случайное число
function getRandom(min, max) {
  if (min >= max) {
    throw new Error('Минимальное значение больше или равно максимального');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция для проверки максимальной длины строки
function checkMaxStringLength(string, maxLength) {
  if (maxLength >= string.length) {
    return true;
  }
  return false;
}

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = function (elements) {
  return elements[getRandom(0, elements.length - 1)];
};

//Функция по
function createArrayPhotos(count) {
  const message = []
  for (let i = 1; i <= count; i++) {
    message.push(getRandomArrayElement(MESSAGES))
  }
  return message.join(' ');
};

//Функция по
const createComment = function (id) ({
  id,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: message(getRandomNumber(messagesCount.min, messagesCount.max)),
  name: getRandomArrayElement(NAMES),
});



// const array = [
//   {
//     id:7,
//     url: "photos/7.jpg",
//     description: "Тест",
//     likes: 20,
//     comments: [{
//       id: 135,
//       avatar: 'img/avatar-6.svg',
//       message: 'В целом всё неплохо. Но не всё.',
//       name: 'Артём',
//     }]
//   },
//   {},
//   {}]


createArrayPhotos(25)
