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
        description: `Bio pages, URL shorteners, and QR codes with Mylinx. Linktree-like platform emphasizing accessibility and affordability.`,
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
       description: 'AniTrek is a multi-language platform for anime fans, offering watchlist management, content discovery, comments, AI scene search, and unified searches for anime, manga, and more.',
       url: 'https://anitrek.com/',
       github: 'https://github.com/asadbek064/anitrek-client'
     },
     {
       id: 4,
       title: 'AmazonFlexWorker',
       description: 'Automate searching and accepting Amazon Flex Driver jobs',
       github: 'https://github.com/asadbek064/AmazonFlexWorker',
     }/* ,
     {
       id: 5,
       title: 'Nox WebRTC',
       description: 'Secure and anonymous video calling over webRTC',
       github: 'https://github.com/asadbek064/nox-WebRTC-videocalls'
     },{
       id: 6,
       title: 'PascalCompiler',
       description: 'Pascal compiler using Java programming language.',
       github: 'https://github.com/asadbek064/PascalCompiler'
     } */
   ];