const gsm = 'Дорогой'
const gsf = 'Дорогая'
const gm = 'Дорогие'

const acceptS = 'Буду'
const acceptM = 'Будем'
const decline = 'Не получится :('

export default [
  // Семья
  { key: 'usol', greeting: gm, name: 'Елена и Андрей', buttons: [acceptM, decline] },
  { key: 'ost', greeting: gm, name: 'Елена и Влад', buttons: [acceptM, decline] },
  { key: 'bolsh', greeting: gm, name: 'Наталья и Артём', buttons: [acceptM, decline] },
  { key: 'pep', greeting: gm, name: 'Пепеляевы', buttons: [acceptM, decline] },
]
