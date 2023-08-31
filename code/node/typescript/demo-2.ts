/**
 * 变量声明
 */

export default {}

let a:number=1

// 函数内部定义
function test():number{
  const a=1
  return a+2;
}


// 块级作用域
function testResult(input: boolean) {
  let a = 100;

  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }

  // Error: 'b' doesn't exist here
  // return b;
}

// 数组解构构
const result=[1,2]
let [resultA,resultB]=result
console.log(resultA,resultB)


const res=[1,3,4,5,6]
const [resA,...rest]=res
console.log(resA,rest)

// 对象结构
const boy={
  name:'chufan',
  gender:'man',
  age:14
}
const {name,age}=boy
console.log(name,age)
const {gender,...restBoy}=boy
console.log(gender,restBoy)

const {defaultA,defaultB=1001}={defaultA:100}


// 接口的函数类型
interface SearchFunc{
  say:(name:string,age:number)=>string;
  sex:boolean;
}

const searchTest:SearchFunc={
  sex:true,
  say:(name:string,age:number)=>{
    return name
  }
}
console.log(searchTest)

interface myFunc{
  (name:string):string
}
const func:myFunc=(name:string)=>{
  return name
}
console.log(func('储凡'))


interface StrArray {
  // 索引为number类型，值为字符串类型
  [index: number]: string;
}

let myArray: StrArray;
myArray = ["储凡", "chufan"];

let myStr: string = myArray[0];

console.log(myStr)


interface myInter{
  name:string
  sayHello():string
}

class Inter implements myInter{
  name: string;

  sayHello(): string {
    return ''
  }
}

// 直接将属性定义在构造函数中
class StudentA{
  constructor(
    public readonly name:string,
    public readonly age:number
  ) {

  }

  async getName(){
    return this.name
  }

  async getAge(){
    return this.age
  }
}

// 等价于
class StudentB{
  public readonly name:string
  public readonly age:number

  constructor(name,age) {
    this.name=name
    this.age=age
  }

  async getName(){
    return this.name
  }

  async getAge(){
    return this.age
  }
}


// 类类型
interface  Plan{
  food:string
  eat:(something:string)=>boolean

}

class PlanA implements Plan{
  food: string;
  eat(something: string): boolean {
    return false;
  }
}

interface FairyA{
  name:string
}

interface FairyB{
  age:number
}

interface Fairy extends FairyA,FairyB{
  gender:number
}
const fairy:Fairy={
  name:"储凡",
  age:18,
  gender:0
}

console.log(fairy)


class Dog{
  age:number
}

class DogA extends Dog{
  name:string
}

const dogA=new DogA()
dogA.name='dogA'
dogA.age=4


class DogB extends Dog{
  private _gender:number
  get gender():number{
    return this._gender
  }
  set gender(gender:number):void{
    this._gender=gender
  }


  // 等价于
  public getGender():number{
    return this._gender
  }
  public setGender(gender:number):void{
    this._gender=gender
  }
}

const dogB=new DogB()

// 通过gender方法来获取_gender私有属性值
dogB.gender=18
console.log(dogB.gender)

class TestStatic{
  public static age=18
  public static async test(){
    return 'this is using static function'
  }
}

console.log(TestStatic.age)
console.log(TestStatic.test())



class PointXY {
  x: number;
  y: number;
}

interface PointXYZ extends PointXY {}



type PointX={
  x:number
}

type PointY={
  y:number
}

type PointZ={
  z:number
}

type PointXYZ3 =PointX & PointY & PointZ
const pointXYZ:PointXYZ3={
  x:1,
  y:2,
  z:3
}
console.log(pointXYZ)

type typeString=string
type typeNumber=number

type newType=typeString | typeNumber

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getAnimal(): Fish | Bird {
  // ...

  return {
    swim() {
    },
    layEggs() {
    }
  }
}

let animal = getAnimal();
animal.layEggs() // okay
// animal.swim()    // errors
// animal.fly()     // errors

// 断言为Bird类型
if((<Bird>animal).fly !=null){
  (<Bird>animal).fly()
}

if((<Fish>animal).swim!=null){
  (<Fish>animal).swim()
}


