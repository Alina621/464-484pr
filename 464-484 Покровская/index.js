import fs from 'fs';


// fs.promises.readFile('readme.txt', 'utf8').then(data => {
// 	let a = data.slice('');
// 	let sum = 0;
// 	for (let elem of a){
// 		sum += Number(elem);
// 	}
// 	console.log(sum)
// });


//Задача 1
// let text = Number(fs.readFileSync('txt.txt', 'utf8'));
// text++;
// fs.writeFileSync('txt.txt', text.toString())

//Задача 2
// let text = Number(fs.readFileSync('txt.txt', 'utf8'));
// let text1 = Number(fs.readFileSync('txt1.txt', 'utf8'));
// let text2 = Number(fs.readFileSync('txt2.txt', 'utf8'));

// fs.writeFileSync('text.txt', (text + text1 + text2).toString())

//Задача 3
// try {
// 	let text = fs.readFileSync('readme.txt', 'utf8');
// 	console.log(text);
// } catch (err) {
// 	console.log('при чтении файла возникла ошибка', err);
// }

//Задача 4
// fs.readFile('txt.txt', 'utf8', function(err, data) {
// 	console.log(data**2);
// });

//Проверка асинхронности
// fs.readFile('txt.txt', 'utf8', function(err, data) {
// 	console.log(data);
// });

// console.log('!!!');

//Обработка исключительных ситуаций
// fs.readFile('1.txt', 'utf8', function(err, data) {
// 	if (!err) {
// 		console.log(data);
// 	} else {
// 		console.log('ошибка', err);
// 	}
// });


//Задание 5
// let i = 0;
// while (true) {
// 	if (i > 9) {
// 		break;
// 	}else{
// 		i++;
// 		fs.writeFile(`txt${i}.txt`, i.toString(), function(err){
// 			if (err) {
// 				console.log('ошибка');
// 			}
// 		})
		
// 	}
// }

//Задание 6

// fs.readFile('txt.txt', 'utf8', function(err,num) {
// 	if(!err){
// 		fs.readFile('txt1.txt', 'utf8', function(err,num1){
// 			if (!err) {
// 				fs.readFile('txt2.txt', 'utf8', function(err,num2){
// 					if (!err) {
// 						console.log(parseInt(num) + parseInt(num1) + parseInt(num2));
// 					}
// 				})
// 			}
// 		})
// 	}
// })

//Задание 7
// fs.readFile('txt.txt', 'utf8', function(err, data) {
// 	if (!err) {
// 		fs.writeFile('txt.txt', (data**2).toString(), function(err) {
// 			if (err) {
// 				console.log('ошибка записи файла');
// 			}
// 		});
// 	} else {
// 		console.log('ошибка чтения файла');
// 	}
// });

//Задание 8
// fs.readFile('readme1.txt', 'utf8', (err, data1) => {
// 	if (!err) {
// 		fs.readFile('readme2.txt', 'utf8', (err, data2) => {
// 			if (!err) {
// 				fs.writeFile('readme.txt', (parseInt(data1) + parseInt(data2)).toString(), err=> {
// 					if (err) {
// 						console.log('ошибка записи файла');
// 					}
// 				});
// 			} else {
// 				console.log('ошибка чтения файла readme2');
// 			}
// 		});
// 	} else {
// 		console.log('ошибка чтения файла readme1');
// 	}
// });

