//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: პრიმიტიულi არის მონაცემი რომელსაც მხოლოდ ერთ ტიპს გადავცემთ  ხოლო არაპრიმიტიულზე 
// შეგვიძლია ბევრი მნიშვნელობის მინიჭება 

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer: const როცა მივანიჭებთ რაიმე მნიშვნელობას შემდეგ მასზე ახალი მნიშვნელობის გადაწერა არ შეგვიძლია 
//letზე კი მარტივად შეგვიძლია გადავაწეროთ პირველ მნიშვნელობას მეორე

//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.
let name="guja";
let age= 20;
let isStudent= false;
let address;//undefined types
let cities=null;
console.log(age);
age=22;
console.log("after change",age)
console.log(isStudent);
isStudent=true;
console.log("after change",isStudent);




//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ
let user=[
  {
    firstName: 'guja',
    lastName: 'kupreishvili',
    age:21,
    email: 'gujakupreishvili4@gmail.com',
    address: 'kutaisi',
    isStudent: 'true',
  }
]
console.log(user);
