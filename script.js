//1.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

let fruits = ["apple", "mango", "avocado", "kiwi"];
{
  fruits.splice(2, "strawberry");
  console.log(fruits);
}

//2.მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = ["good", "day"];
{
  let sliceInfo = info.slice(1);
  console.log(sliceInfo);
}

//3.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

//4.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
//  მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let x = [5, 25, 89, 120, 36];

x.unshift("html", "css");
console.log(x);

x.push("javascript", "python");
console.log(x);

x.shift();

console.log(x);

x.pop();
console.log(x);

//5.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

//გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

//6.მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

//7.მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
//წაშალეთ ამ მასივიდან რიცხვი 10;

//8.მოცემულია მასივი:   let array8 = [ 1, 2 , 3 , 4, 5]
//Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;
