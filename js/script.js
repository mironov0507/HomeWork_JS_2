// Zadanie 1 //////////////////////////////////////////////

let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?');
    city = prompt('Город проживания?'),
    phone = prompt('Ваш телефон?'),
    email = prompt('Ваша електронная почта?'),
    company = prompt('Название Вашей компании?');

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}. `);

// Zadanie 2 //////////////////////////////////////////////

let yarB = 2020 - Number(age);
    
document.write(`<br/> ${name} родился в ${yarB} году.`);

// Zadanie 3 //////////////////////////////////////////////

let stroka = '323127';


let sum1 = +stroka[0] + +stroka[1] + +stroka[2],
    sum2 = +stroka[3] + +stroka[4] + +stroka[5];

    (sum1 == sum2)? console.log('Да') : console.log('Нет');

// Zadanie 4 //////////////////////////////////////////////

let a = 8;

if(a > 0) console.log('Верно!');
    else console.log('Неверно!');

 // Zadanie 5 //////////////////////////////////////////////
  
let a7 = 10,
    b = 2;

let sum3 = a7+b,
    razn = a7-b,
    proizv = a7*b,
    delen = a7/b;

    console.log(sum3, razn, proizv, delen);

if(sum3>1){
    let kvad = sum3*sum3;
    console.log(kvad);
}

 // Zadanie 6 //////////////////////////////////////////////

if((a7>2 && a7<11) || (b>=6 && b<14)) console.log('Верно');
    else console.log('Неверно');

 // Zadanie 7 //////////////////////////////////////////////

 let n = 12;

 if(n>0 && n<=15){
     console.log('Первая половина часа');
    }else if(n>15 && n<=30) {
        console.log('Вторая половина часа');
    }else if(n>30 && n<=45) {
        console.log('Третья половина часа');
    }else {
        console.log('Четвертая половина часа');
}

 // Zadanie 8 //////////////////////////////////////////////

let day = 18;

if(day>=1&& day<11){
    console.log('Первая декада');
}else if(day>=11 && day<21){
    console.log('Вторая декада');
}else {
    console.log('Третья декада');
}

 // Zadanie 9 //////////////////////////////////////////////

 let day1 = 523;

 let god = day1/365,
     mes = day1/31,
     ned = day1/7,
     hour = day1*24,
     min =  hour*60,
     sec = min*60;

if(day1<7){
    console.log(`${day1} дн. - это "меньше недели", ${hour}час., ${min}мин., ${sec}сек.`);
}else if(day1<31){
    console.log(`${day1} дн. - это "меньше месяца", ${ned}нед., ${hour}час., ${min}мин., ${sec}сек.`);
}else if(day1<365){
    console.log(`${day1} дн. - это "меньше года", ${mes}мес., ${ned}нед., ${hour}час., ${min}мин., ${sec}сек.`);
}else {
    console.log(`${day1} дн. - это ${god}г., ${mes}мес., ${ned}нед., ${hour}час., ${min}мин., ${sec}сек.`);
}

 // Zadanie 10 //////////////////////////////////////////////

let day2 = 256;

switch (true){
    case ((day2>=335 && day2<=365) || (day2>=1 && day2<60)):
        console.log('Зима');

        (day2>=335 && day2<=365)?console.log('декабрь'):
        (day2>=1 && day2<=31)?console.log('январь'):
        console.log('февраль');
        break;
    
    case (day2>=60 && day2<=151):
        console.log('Весна');

        (day2>=60 && day2<=90)?console.log('март'):
        (day2>=91 && day2<=120)?console.log('апрель'):
        console.log('май');
        break;

    case (day2>=152 && day2<=243):
        console.log('Лето');

        (day2>=152 && day2<=181)?console.log('июнь'):
        (day2>=182 && day2<=212)?console.log('июль'):
        console.log('август');
        break;

    case (day2>=244 && day2<=334):
        console.log('Осень');

        (day2>=244 && day2<=273)?console.log('сентябрь'):
        (day2>=274 && day2<=304)?console.log('октябрь'):
        console.log('ноябрь');
        break;        
}