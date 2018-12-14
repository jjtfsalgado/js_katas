function Decorator(options) {
    if (!options) {
        options = {};
    }
    this.before = options.before;
    this.after = options.after;
}

Decorator.prototype.decorate = function decorate(fn) {
    fn
};

function sum() {
    return Array.prototype.reduce.call(arguments, function(sum, value) {
        return sum + value;
    }, 0);
}

function filter(min, max) {
    return Array.prototype.slice.call(arguments, 2).filter(function(value) {
        return value >= min && value <= max;
    });
}


function filterNoNumbers() {
    return Array.prototype.filter.call(arguments, function(value) {
        return typeof value === 'number' && value === value && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY;
    });
}

function round(decimals) {
    if (arguments.length === 2) {
        return arguments[1].toFixed(decimals);
    } else {
        return Array.prototype.splice.call(arguments, 1).map(function(value) {
            return value.toFixed(decimals);
        });
    }
}


var filterDecorator = new Decorator({
    before : filter
});

var filterNoNumbersDecorator = new Decorator({
    before : filterNoNumbers
});

var roundDecorator = new Decorator({
    after: round
});

var decoratedSum = filterDecorator.decorate(sum, 1, 9); // 1 and 9 are the min and max parameters passed to the filter function
decoratedSum = filterNoNumbersDecorator.decorate(decoratedSum);
decoratedSum = roundDecorator.decorate(decoratedSum, 2); // rounded to two decimals

decoratedSum(-3, 1.016, 0, 4, NaN, 8.041, '27', 9, 12); // "22.06"