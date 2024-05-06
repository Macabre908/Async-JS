const counter = (n) => {
    let count = 0;
        setInterval(() => {
            if(count < n){
                console.log(count++);
            }
            else{
                return -1;
            }
        }, 1000);
}

counter(20);