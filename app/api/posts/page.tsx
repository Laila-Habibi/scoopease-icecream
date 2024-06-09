export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/posts');
    const posts = await res.json();
    return { props: { posts } };
  }