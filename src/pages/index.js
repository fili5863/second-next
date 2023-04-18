import Head from "next/head";
import Image from "next/image";
import Anchor from "@/components/Anchor";
export default function Home({ products }) {
  return (
    <>
      <h1>Hej mor</h1>
      <section className="products">
        {products.map(product => (
          <article>
            <h2>{product.productdisplayname}</h2>
            <p>{product.price}</p>
            <Anchor href={"/products/" + product.category + product.id}>Read more</Anchor>
          </article>
        ))}
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const api = "https://kea-alt-del.dk/t7/api/products?";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
