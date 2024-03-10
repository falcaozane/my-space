export const revalidate = 420;

interface Post{
    title: string;
    content: string;
    slug: string;
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
      (res) => res.json()
    );
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }

interface Props {
    params: {slug: string}
}

export default async function BlogPostPage({params}:Props) {

    const posts: Post[] = await fetch ("http://localhost:3000/api/content", {cache:'no-store'}).then(
        (res) => res.json()
    )

    const post = posts.find((post) => post.slug === params.slug)!;

    return(
        <div className='py-5 px-4'>
            <h1 className='font-bold text-3xl mb-2'>{post.title}</h1>
            <p className='text-xl '>{post.content}</p>
        </div>
    )    
}