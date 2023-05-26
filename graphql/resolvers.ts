import prisma from '../lib/prisma'

export const resolvers = {
  Query: {
    links: () => [
      {
        category: "Open Source",
        description: "Fullstack React framework",
        id: '1',
        imageUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
        title: "Next.js",
        url: "https://nextjs.org",
      },
      {
        category: "Open Source",
        description: "Next Generation ORM for TypeScript and JavaScript",
        id: '2',
        imageUrl: "https://www.prisma.io/images/og-image.png",
    
        title: "Prisma",
        url: "https://prisma.io",
      },
      {
        category: "Open Source",
        description: "Utility-fist css framework",
        id: '3',
        imageUrl:
          "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",
        title: "TailwindCSS",
        url: "https://tailwindcss.com",
      },
    ],
  },
}