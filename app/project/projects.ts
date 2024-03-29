interface ProjectItem {
    id: number;
    title: string;
    description: string;
    url?: string;
    github?: string;
  }
  
export const projects : ProjectItem[] = [
      {
        id: 1,
        title: 'Mylinx',
        description: `A seamless platform to consolidate all your online content in one easy-to-use place, whether you\'re creating, curating, or sharing. `,
        url: 'https://mylinx.cc/',
      },
      {
        id: 2,
        title: 'ReactAllPlayer',
        description: 'Simple lightweight, accessible, and customizable React media player that supports modern browsers.',
        url: 'https://reactallplayer.asadbek.dev/',
        github: 'https://github.com/asadbek064/react-all-player'
      },
      {
       id: 3,
       title: 'AniTrek',
       description: 'An anime-themed website featuring reviews, a trivia game, and image-based anime title identification, with a built-in search feature.',
       url: 'https://anitrek.co/',
       github: 'https://github.com/asadbek064/anitrek-client'
     },
     {
       id: 4,
       title: 'AmazonFlexWorker',
       description: 'Automate searching and accepting Amazon Flex Driver jobs',
       url: 'https://github.com/asadbek064/AmazonFlexWorker',
     },
     {
       id: 5,
       title: 'Nox WebRTC',
       description: 'Secure and anonymous video calling over webRTC',
       github: 'https://github.com/asadbek064/nox-WebRTC-videocalls'
     }/* ,{
       id: 6,
       title: 'PascalCompiler',
       description: 'Pascal compiler using Java programming language.',
       github: 'https://github.com/asadbek064/PascalCompiler'
     } */
   ];