const readlineSync = require('readline-sync');
    try {
        let a = parseInt(readlineSync.question('Nhap vao so a: '));
        let b = parseInt(readlineSync.question('Nhap vao so b: '));
        let c = parseInt(readlineSync.question('Nhap vao so c: '));
        console.log(ptbac2(a,b,c));
    }catch(err){
        console.log("Loi:" +err.message);
    }


const ptbac2 = (a, b,c) => {
    if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true){
        return "Ban can nhap vao cac so";
    }else{
        if(a == 0){
            return "Tham so dau tien phai # 0"
        }else{
            let delta = b*b - 4*a*c;
            if(delta < 0){
                return "delta nho hon 0";
            }
            if(delta == 0){
                let x = -b/(2*a);
                return `[x1, x2] = [${x}, ${x}]`;
            }
            if(delta > 0){
                let x1 = (-b-Math.sqrt(delta))/(2*a);
                let x2 = (-b+Math.sqrt(delta))/(2*a);
                return `[x1, x2] = [${x1}, ${x2}]`;
            }
        }    
    }
}
