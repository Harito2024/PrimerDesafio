class ProductManager {

    static lastId = 0

    constructor() {
            this.products = []
    }

    addProduct(title, descripcion, price, thumbnail, code, stock){
        if(!title || !descripcion || !price || !thumbnail || !code || !stock){
            console.log('Faltan campos')
            return
        }
        const codeEncotrado = this.products.find((id)=>id.code === code)
        if(codeEncotrado){
            console.log('Codigo de Producto repetido')
            return
        }
         
        const newProduct = {
            id: ++ ProductManager.lastId ,
            title,
            descripcion, 
            price, 
            thumbnail, 
            code, 
            stock
        }
        
        this.products.push(newProduct)
        console.log(newProduct)
    }
    getProduct(){
        console.log(this.products)
    }
    getProductById(id){
        const productoEncontrado = this.products.find(prod=>prod.id===id)
        if(!productoEncontrado){
            console.log('Producto no existente')
        }else{
            console.log('Producto encontrado', productoEncontrado)
        }
        return productoEncontrado
    }
}

const manager = new ProductManager()

manager.getProduct()

manager.addProduct(
    'Producto de  Prueba1',
    'Decripcion de la primera prueba',
    100,
    'www.ertyuio.com',
    1234,
    25)

manager.addProduct(
    'Producto de  Prueba2',
    'Decripcion de la primera prueba2',
    250,
    'www.ertyuio1235.com',
    1235,
    50)

manager.addProduct(
    'Producto de  Prueba3',
    'Decripcion de la primera prueba3',
    150,
    'www.ertyuio1236.com',
    1236,
    50)


manager.getProductById(3)

