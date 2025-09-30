import ClientButton from "./ClientButton";

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const content = await response.json();
  return content;
}

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
}


export default async function FirstServerComponent () {
    const products = await getProducts();
    return (
        <div>
            Welcome to first server component of next js project
            <br/>
            <ClientButton />
            <div>
                {products.map((product: Product) => <div key={product.id}>{product.title}</div>)}
            </div>
        </div>
    )
}