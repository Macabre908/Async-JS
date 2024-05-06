let count2 = 1;

const counter2 = (n) => {
    console.log(count2++);
    setTimeout(counter2, 1000);
}

counter2(5);