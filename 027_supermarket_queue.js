function queueTime(customers, n) {
    let queue = customers.splice(0, n);
    let time = 0;

    while(queue.find(i => !!i)){
        queue = queue.map(i => i > 1 ? --i : customers.shift());
        ++time;
    }

    return time;
};

console.log(queueTime([1,2,3,4], 1))
