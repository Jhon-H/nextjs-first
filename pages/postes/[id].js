import React from 'react';
import Head from 'next/head';

function MyJob({ data: { id, title, body } }) {
  return (
    <>
    <Head> <title> Post | {id} </title> </Head>
    <div>
      <h1> {id} - {title} </h1>
      <p> {body} </p>
    </div>
    </>
  )
}


export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(post => ({ params: { id: `${post.id}` } }));

    return { paths: paths, fallback: false };
  } catch (e) {
    console.log(e);
  }


}

export async function getStaticProps({ params: { id } }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return { props: { data } };
  } catch (e) {
    console.log(e);
  }
}

export default MyJob;
