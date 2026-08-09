/*
=========================================================================
СПИСОК КОНТЕНТА
=========================================================================
Редактируй этот файл, чтобы добавлять/менять/удалять фильмы, книги,
сериалы и т.д. — index.html подхватит изменения автоматически при
обновлении страницы в браузере.

ПОЛЯ КАЖДОЙ КАРТОЧКИ:
------------------------------------------------------------------------
id — уникальный код (латиницей, без пробелов). Используется внутри
     приложения, придумай любой, главное не повторяться.
title — название, отображается на карточке.
omdb — название на английском (или оригинальное), по которому
     приложение ищет постер и рейтинг на TMDB.
type — тип: 'Фильм' | 'Мультфильм' | 'Сериал' | 'Док. сериал' |
     'Книга' | 'Курс' | 'Подкаст'
     (для 'Фильм'/'Мультфильм'/'Сериал'/'Док. сериал' приложение само
     подтянет постер и рейтинг с TMDB по названию из поля omdb).
meta — год выпуска или автор/подзаголовок (то, что пишется после точки
     рядом с типом).
category — категория для фильтров и поиска, ОБЯЗАТЕЛЬНО одна из:
     'Фильмы' | 'Мультфильмы' | 'Книги' | 'Аудио' | 'Игры' | 'Наука' |
     'Документальные' | 'Творчество'
gradient — цвет плашки-заглушки на случай, если постер с TMDB не
     найдётся (CSS-градиент или просто цвет в кавычках).
desc — текст описания в модальном окне при клике на карточку.
downloadUrl — необязательное поле, прямая ссылка на скачивание файла.
recommended — true, если карточка должна попасть в блок "Рекомендации"
     на главной (необязательное поле, можно не указывать).
continue — необязательное поле, добавляет карточку в "Продолжить
     просмотр" на главной: { leftMin: 45, percent: 68 }
     (leftMin — сколько минут осталось, percent — прогресс шкалы от 0
     до 100).

Просто скопируй один блок { ... } целиком, вставь новый и поменяй
значения. Не забывай запятую между блоками!
=========================================================================
*/

const contentData = [

  {
      id: 'kid_and_karlson',
      title: 'Малыш и Карлсон',
      omdb: 'The Kid and Karlson',
      type: 'Мультфильм',
      meta: '1968',
      category: 'Мультфильмы',
      gradient: 'linear-gradient(135deg,#4e88c7,#1f4f7f)',
      desc: 'Первая часть знаменитого советского мультфильма по произведению Астрид Линдгрен. Малыш знакомится с веселым и самоуверенным Карлсоном, который живет на крыше.',
      downloadUrl: 'https://dx21.videodownapi.com/mates/en/download?url=ZTREjvNyOeTmi6H194dPXtbQYBO5pxPwS0ELrXluRstoZ5%2BxEpJSolmtJ0lsd52UQnrpbquYId1ie1MHukqfNDORXYIi22ke1KxJEwDyaAeCkFgXi/9KPdsFbT/jpFReNPa06JAlIV1hCXwTBK0Ir9oBdfIHGav4TuXKEnBRywexz3Khy8EO686nLA1t2D2p0hHnqWsQ2A5d1QIoJecTBjsScKAtQJSf',
      youtubeId: 'xsJ7kXyLdOI',
      recommended: true,
      posterUrl: 'https://avatars.mds.yandex.net/get-ott/374297/2a0000019851507dcc932a6d9500698c1c26/600x900',
      continue: { leftMin: 8, percent: 55 }
    },
    {
      id: 'karlson_returns',
      title: 'Карлсон вернулся',
      omdb: 'Karlson Returns',
      type: 'Мультфильм',
      meta: '1970',
      category: 'Мультфильмы',
      gradient: 'linear-gradient(135deg,#d78d4d,#8f5322)',
      desc: 'Продолжение приключений Карлсона. Вместе с Малышом он устраивает новые шалости и помогает проучить Фрекен Бок.',
      downloadUrl: 'https://dx35.videodownapi.com/mates/en/download?url=ZTREjvNyOeTmi6H194dPXtqUNXa7k%2BDIuGtcYgPeFmmL4SQMtp/wRKre8WJhKmLsGpehy8R7ycrni9PxpxblrBqWeVimlkU1ETJ18XlaTDF4u3NqMoLTr2OATqiDEa9jwoSqr6zFYkSQTyxZDBEYZy69zFIBn24XSU/HpTd9V5W2V8P%2BoAx6pAnN/QNIR/C9hq6U1qn/CUPL/D2rS7OSBxUxAGXt7sQhlupmp82AlqvfkOQ5XvIim75/bb3D9Q2EWWuG%2Bitcp/0cAausB7YdHdXvL12bvurDCGyKe1ic7SqTFDiyIIpMs2kz85QPHnEsctC4F66CFYgLOWrCUZY0bXNBm3AqQKbZv3XO3fCboLCvob5wnkoyVrxhwx3URpnKGZloYMHA0gej%2BhKChLIhgA%3D%3D',
      youtubeId: 'b3CXS-shz1k',
      recommended: true,
      posterUrl: 'https://avatars.mds.yandex.net/get-ott/2385704/2a00000198514d67d25c2eb48913e00aea1c/600x900',
      continue: { leftMin: 14, percent: 18 }
    },
    {
      id: 'vinni_puh_1',
      title: 'Винни-Пух',
      omdb: 'Winnie the Pooh (Soyuzmultfilm)',
      type: 'Мультфильм',
      meta: '1969',
      category: 'Мультфильмы',
      gradient: 'linear-gradient(135deg,#e0a940,#8a5a12)',
      desc: 'Первая серия. Плюшевый медвежонок Винни-Пух живёт в лесу, поёт песенки и ищет мёд вместе с Пятачком.',
      downloadUrl: 'https://example.com/download/vinni_puh_1.mp4',
      youtubeId: 'XXXXXXXXXXX',
      recommended: true,
      posterUrl: 'https://avatars.mds.yandex.net/get-ott/placeholder/vinni_puh_1/600x900',
      continue: { leftMin: 10, percent: 0 }
    },
    {
      id: 'vinni_puh_2',
      title: 'Винни-Пух идёт в гости',
      omdb: 'Winnie the Pooh Goes Visiting',
      type: 'Мультфильм',
      meta: '1971',
      category: 'Мультфильмы',
      gradient: 'linear-gradient(135deg,#e0a940,#8a5a12)',
      desc: 'Вторая серия. Винни-Пух идёт в гости к Кролику, съедает весь мед и застревает в норе.',
      downloadUrl: 'https://example.com/download/vinni_puh_2.mp4',
      youtubeId: 'YYYYYYYYYYY',
      recommended: true,
      posterUrl: 'https://avatars.mds.yandex.net/get-ott/placeholder/vinni_puh_2/600x900',
      continue: { leftMin: 10, percent: 0 }
    },
    {
      id: 'vinni_puh_3',
      title: 'Винни-Пух и день забот',
      omdb: 'Winnie the Pooh and the Day of Concern',
      type: 'Мультфильм',
      meta: '1972',
      category: 'Мультфильмы',
      gradient: 'linear-gradient(135deg,#e0a940,#8a5a12)',
      desc: 'Третья серия. Винни-Пух и Пятачок спасают Иа-Иа от падения в пропасть и устраивают праздник.',
      downloadUrl: 'https://example.com/download/vinni_puh_3.mp4',
      youtubeId: 'ZZZZZZZZZZZ',
      recommended: true,
      posterUrl: 'https://avatars.mds.yandex.net/get-ott/placeholder/vinni_puh_3/600x900',
      continue: { leftMin: 10, percent: 0 }
    },
];