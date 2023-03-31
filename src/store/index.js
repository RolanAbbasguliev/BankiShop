import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        title: '«Рождение Венеры»',
        author: 'Сандро Боттичелли',
        price: 1000000,
        prevPrice: 2000000,
        status: 'active',
        description:
          '«Рождение Венеры» — картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.',
      },
      {
        id: 2,
        title: '«Тайная вечеря»',
        author: 'Леонардо да Винчи',
        price: 3000000,
        prevPrice: 0,
        status: 'active',
        description:
          '«Тайная вечеря» — монументальная роспись, работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.',
      },
      {
        id: 3,
        title: '«Сотворение Адама»',
        author: 'Микеланджело',
        price: 5000000,
        prevPrice: 6000000,
        status: 'active',
        description:
          '«Сотворение Адама» — одна из самых выдающихся композиций росписи Сикстинской капеллы. В бесконечном пространстве летит Бог-Отец, окружённый бескрылыми ангелами, с реющей белой туникой. ',
      },
      {
        id: 4,
        title: '«Урок Анатомии»',
        author: 'Рембрандт',
        price: 0,
        prevPrice: 0,
        status: 'sold',
        description:
          'Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека.',
      },
    ],
  },

  // getters: {

  // },

  // mutations: {

  // },

  // actions: {

  // },
});