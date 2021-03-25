import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu'
import reportWebVitals from './reportWebVitals';

const data = [
  {
    "name": "Запеченный лосось",
    "ingredients": [
      { "name": "Лосось", "amount": 1, "measurement": "фунт" },
      { "name": "Кедровые орехи", "amount": 1, "measurement": "чаша" },
      { "name": "Сливочное масло", "amount": 2, "measurement": "чаши" },
      { "name": "Жёлтая Тыква", "amount": 1, "measurement": "штука" },
      { "name": "Оливковое масло", "amount": 0.5, "measurement": "чаши" },
      { "name": "Чеснок", "amount": 3, "measurement": "зубчика" }
    ],
    "steps": [
      "Разогрейте духовку до 350 градусов",
      "Смажте оливковым маслом стеклянную форму для выпечки",
      "Добавьте лосось, чеснок и кедровые орешки в форму",
      "Выпекайте в течение 15 минут.",
      "Добавьте желтую тыкву и поставьте обратно в духовку на 30 минут.",
      "Выньте из духовки и дайте остыть в течение 15 минут. Добавьте листья салата и подавайте на стол."
    ]
  },
  {
    "name": "Рыбные тако",
    "ingredients": [
      { "name": "Былая рыба", "amount": 1, "measurement": "фунт" },
      { "name": "Сыр", "amount": 1, "measurement": "чаша" },
      { "name": "кочанный салат", "amount": 2, "measurement": "чаши" },
      { "name": "Помидоры", "amount": 2, "measurement": "большие"},
      { "name": "Тортилья", "amount": 3, "measurement": "штуки" }
    ],
    "steps": [
      "Приготовьте рыбу на гриле до готовности",
      "Выложите рыбу на 3 лепешки",
      "Сверху положите листья салата, помидоры и сыр."
    ]
  }
]

ReactDOM.render(
  <Menu recipes={data}/>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();