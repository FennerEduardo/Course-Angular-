/*
    ===== Código de TypeScript =====
*/
interface Product {
    desc: string,
    price: number
}

const phone: Product = {
    desc: 'Nokia',
    price: 150
}

const tablet: Product = {
    desc: 'Ipad',
    price: 350
}

const calculateTax = (products: Product[]): [number, number] => {
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * 0.15];

}

const items = [phone, tablet];

const [total, tax] = calculateTax(items);
console.log(total, tax);


