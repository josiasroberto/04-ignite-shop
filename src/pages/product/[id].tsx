import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return (
    // <h1>Product: {JSON.stringify(query)}</h1>
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          maiores quam velit labore libero cumque quia hic asperiores, excepturi
          aliquam sed nesciunt magni consequuntur porro eos dolorem architecto
          quaerat unde?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
