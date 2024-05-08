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
        url: 'https://reactallplayer.asadk.dev/',
        github: 'https://github.com/asadbek064/react-all-player'
      },
      {
       id: 3,
       title: 'AniTrek',
       description: 'AniTrek is a multi-language platform for anime fans, offering easy watchlist management, content discovery, and community engagement. It gathers data on anime titles for easy discovery and features comment engine, AI scene search, Anime/Manga/Voice/Character/OP/ED search and consolidated watchlists from various providers. No streaming sources provided.',
       url: 'https://anitrek.com/',
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