# Angry Teacher - Professora Furiosa

A programming teacher, tired of students arriving late, decided that she will cancel the class if there are few presents.

She represents the students' entrance as an array of late arrival times in minutes. For example, if one student arrived 10 minutes late, another 5 minutes early, another 3 minutes late, and another on time, she could represent that:

var mondayArrivals = [10, -5, 3, 0];

With this information and the minimum number of students for the course to succeed, the teacher wants to know if the class will take place or not. For example, assuming that the minimum number of students for the class to take place is 2, then the Monday course will take place because there was one student who was punctual and one student who arrived early that day. 

arrivals(mondayArrivals, 2)
true

But if the minimum amount was 3, the class wouldn't happen:

arrivals(mondayArrivals, 3)
false

Write down the following functions: 1. #arrivals, which tells if the class will take place according to the array of students who entered. 2. #openings, which uses an array with the arrays of students who entered on the other days, and the minimum number of students, and tells which days the classes took place and which did not. For example:

openings([studentsSunday, studentsTuesday, studentsFourth], 2)
[true, false, false]




______________________________________________________________________________________________________________________________________
Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu que vai cancelar a aula se há poucos presentes.

Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:

var alunosDaSegunda = [10, -5, 3, 0];

Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e um estudante que chegou cedo.

 acontece(alunosDaSegunda, 2)
true

Mas se a quantidade mínima fosse 3, a aula não aconteceria:

 acontece(alunosDaSegunda, 3)
false

Escreva as seguintes funções: 1. #acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. #aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false]


