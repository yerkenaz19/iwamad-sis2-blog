export type Post = {
  id: number
  title: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Starting My Web Development Journey',
    excerpt: 'How I started learning web development and React.',
    content:
      'Web development has become one of my main areas of interest. I started by learning HTML, CSS and JavaScript, and then moved to React and TypeScript.',
  },
  {
    id: 2,
    title: 'Why I Like React',
    excerpt: 'The reasons React makes building interfaces easier.',
    content:
      'React makes it possible to divide an interface into reusable components. This makes larger applications easier to understand and maintain.',
  },
  {
    id: 3,
    title: 'Learning TypeScript',
    excerpt: 'My experience working with types in frontend projects.',
    content:
      'TypeScript helps catch many mistakes before the application runs. Typed props, state and data make React projects more predictable.',
  },
  {
    id: 4,
    title: 'Building Better UI',
    excerpt: 'Small details that can make a website easier to use.',
    content:
      'Good interfaces need clear hierarchy, readable text, consistent spacing and accessible controls. Small improvements can make a large difference.',
  },
  {
    id: 5,
    title: 'What I Learned From Projects',
    excerpt: 'Lessons I learned while building practical projects.',
    content:
      'Working on practical projects taught me that understanding the structure of an application is just as important as writing individual pieces of code.',
  },
]