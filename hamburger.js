/**
 * Класс, объекты которого описывают параметры гамбургера.
 /*
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {price: 50, calories: 20}
Hamburger.SIZE_LARGE = {price: 100, calories: 40}
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20}
Hamburger.STUFFING_SALAD = {price: 20, calories: 5}
Hamburger.STUFFING_POTATO = {price: 15, calories: 10}
Hamburger.TOPPING_MAYO = {price: 20, calories: 5}
Hamburger.TOPPING_SPICE = {price: 15, calories: 0}

/*
 * Добавить до авку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function(topping) {
    if (this.toppings.indexOf(topping) == -1) { 
        this.toppings.push(topping);
    } else {
        console.log("toping exits")
    }
}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function(topping){
    if (this.toppings.indexOf(topping) == -1) { 
        console.log("toping doesn't exit")
    } else {
        this.toppings.splice(this.toppings.indexOf(topping), 1);
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function(){
    a = [];
    if (this.toppings.indexOf(Hamburger.TOPPING_MAYO) != -1) {
        a.push("TOPPING_MAYO");
    } 
    if (this.toppings.indexOf(Hamburger.TOPPING_SPICE) != -1){
        a.push("TOPPING_SPICE");
    } 
    return(a); 
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function(){
    if (this.size == Hamburger.SIZE_SMALL) {
        return("SIZE_SMALL");
    } else if (this.size == Hamburger.SIZE_LARGE){
        return("SIZE_LARGE");
    } else {
        console.log("wrong size");
    }
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function(){
    if (this.stuffing == Hamburger.STUFFING_CHEESE) {
        return("STUFFING_CHEESE");
    } else if (this.stuffing == Hamburger.STUFFING_SALAD){
        return("STUFFING_SALAD");
    } else if (this.stuffing == Hamburger.STUFFING_POTATO){
        return("STUFFING_POTATO")
    }else {
        console.log("wrong stuffing");
    }
}
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function(){
    price = 0;
    this.toppings.forEach(function(item){price = price + item.price});
    price = price + this.size.price + this.stuffing.price;
    return(price);
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function(){
    calories = 0;
    this.toppings.forEach(function(item){calories = calories + item.calories});
    calories = calories + this.size.calories + this.stuffing.calories;
    return(calories);
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 *
 * function HamburgerException(){}
 */
