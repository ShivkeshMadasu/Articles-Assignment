const data = [
  {
    id: 1,
    author: "Manish Singh",
    title: "Indian fintech founder asks for the removal of BharatPe CEO from board",
    description: "BharatPe co-founder and managing director Ashneer Grover has asked the board for the removal of chief executive Suhail Sameer from the board in the latest of a series of remarkable turn of events at the Tiger Global-backed Indian fintech startup. Grover, who …",
    url: "https://techcrunch.com/2022/02/04/ashneer-grover-suhail-sameer-bharatpe/",
    image: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1236288728.jpg?w=592",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 51,
    content: "BharatPe co-founder and managing director Ashneer Grover has asked the board for the removal of chief executive Suhail Sameer from the board in the latest of a series of remarkable turn of events at … [+3447 chars] shivkesh"
  },
  {
    id: 2,
    author: "Rebecca Bellan",
    title: "In Ford's transition to EVs, cost-cutting takes center stage",
    description: "Ford has made cost-cutting a key piece of its EV strategy as the company works to improve profit margins while meeting what CEO Jim Farley has called “incredible demand” of its new electric vehicle models. During the company’s fourth-quarter and full-year ear…",
    url: "https://techcrunch.com/2022/02/03/in-fords-transition-to-evs-cost-cutting-takes-center-stage/",
    image: "https://techcrunch.com/wp-content/uploads/2021/10/roberto-baldwin-fordmacheGT-14.jpg?w=600",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Ford has made cost-cutting a key piece of its EV strategy as the company works to improve profit margins while meeting what CEO Jim Farley has called “incredible demand” of its new electric vehicle\n"
  },
  {
    id: 3,
    author: "Connie Loizos",
    title: "Marathon Venture Capital adds to its newest fund to back Greek founders around the globe",
    description: "Marathon Venture Capital, an Athens, Greece-based venture firm cofounded in 2017 by two stalwarts of the Greek startup scene, has added €30 million in capital commitments to its second fund roughly a year after completing a first close with €40 million. Backe…",
    url: "https://techcrunch.com/2022/02/03/marathon-venture-capital-adds-to-its-newest-fund-to-back-greek-founders-around-the-globe/",
    image: "https://techcrunch.com/wp-content/uploads/2020/11/Marathon-team.jpg?w=711",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Marathon Venture Capital, an Athens, Greece-based venture firm cofounded in 2017 by two stalwarts of the Greek startup scene, has added 30 million in capital commitments to its second fund roughly a … [+6801 chars"
  },
  {
    id: 4,
    author: "Alex Wilhelm",
    title: "Daily Crunch: Mos evolves from fintech into challenger bank, as early users start post-college lives",
    description: "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
    url: "https://techcrunch.com/2022/02/03/daily-crunch-mos-evolves-from-fintech-into-challenger-bank-as-early-users-start-post-college-lives/",
    image: "https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-1161990255.jpg?w=683",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\nHello and welcome to Daily Crunch for Thursday, February 3, 2022!"
  },
  {
    id: 5,
    author: "Rebecca Bellan",
    title: "Aptiv's latest investment shows that software-defined vehicles are here to stay",
    description: "Automakers keen to sell vehicles loaded with features and software services — in a bid to generate more revenue — have an information overload challenge. These so-called software-defined vehicles contain myriad systems-on-a-chip (SoCs) running anything from e…",
    url: "https://techcrunch.com/2022/02/03/aptivs-latest-investment-shows-that-software-defined-vehicles-are-here-to-stay/",
    image: "https://techcrunch.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-03-at-2.23.27-pm.png?w=695",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Automakers keen to sell vehicles loaded with features and software services in a bid to generate more revenue have an information overload challenge.\r\nThese so-called software-defined vehicles contai… [+5380 chars]"
  },
  {
    id: 6,
    author: "Vitaly Alexandrov",
    title: "11 ways to make personalized shopping more effective and profitable",
    description: "There is no longer a question of whether or not you should offer personalized digital experiences. The research shows that anything less is a death knell to your brand’s long-term success",
    url: "https://techcrunch.com/2022/02/03/11-ways-to-make-personalized-shopping-more-effective-and-profitable/",
    image: "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1288206657.jpg?w=600",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Since customer-centric digital strategies are now the norm for successful brands, the current focus should be on ways to use new tools and tech to differentiate your brand experience from the competi… [+3039 chars]"
  },
  {
    id: 7,
    author: "Alex Wilhelm",
    title: "Snap finally did it, y'all",
    description: "Sound the horns, unveil the banners, cue the parade. Snap is profitable. And we don’t mean adjusted-EBITDA profitable, adjusted-operating-income profitable, or even the infamous non-GAAP-net-income profitable. It’s real-profit profitable. In the fourth quarte…",
    url: "https://techcrunch.com/2022/02/03/snap-finally-did-it-yall/",
    image: "https://techcrunch.com/wp-content/uploads/2020/09/snap-glitch1.jpg?w=712",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Sound the horns, unveil the banners, cue the parade. Snap is profitable.\r\nAnd we don’t mean adjusted-EBITDA profitable, adjusted-operating-income profitable, or even the infamous non-GAAP-net-income … [+2485 chars]"
  },
  {
    id: 8,
    author: "Aisha Malik",
    title: "Amazon is increasing the annual price of Prime to $139 in the U.S.",
    description: "Amazon is increasing the price of Prime in the United States, the company announced on Thursday as part of its quarterly and full-year earnings release. The monthly fee is going from $12.99 to $14.99 and the annual membership is increasing from $119 to $139. …",
    url: "https://techcrunch.com/2022/02/03/amazon-is-increasing-the-annual-price-of-prime-to-139-in-the-u-s/",
    image: "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1211125072.jpg?w=601",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Amazon is increasing the price of Prime in the United States, the company announced on Thursday as part of its quarterly and full-year earnings release. The monthly fee is going from $12.99 to $14.99… [+1126 chars] shivkesh"
  },
  {
    id: 9,
    author: "George Arison",
    title: "The truth about management in Silicon Valley: It doesn't exist",
    description: "The tech industry is home to some of the world’s greatest innovators, and incredible success stories. But it’s also a space where there’s a surprising lack of appreciation for skilled management.",
    url: "https://techcrunch.com/2022/02/03/the-truth-about-management-in-silicon-valley-it-doesnt-exist/",
    image: "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-182055792.jpg?w=600",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "More posts by this contributor\r\nThe tech industry is home to some of the worlds greatest innovators, most profitable and valuable companies, and incredible startup success stories. But, these achieve… [+8344 chars]"
  },
  {
    id: 10,
    author: "Frederic Lardinois",
    title: "Dolby acquires low-latency streaming platform Millicast",
    description: "Dolby Laboratories today announced that it has acquired Millicast, a WebRTC-based developer platform for building ultra-low-latency video streaming experiences, as it works to build out its developer platform. The promise of Millicast, which was founded in 20…",
    url: "https://techcrunch.com/2022/02/03/dolby-acquires-low-latency-streaming-platform-millicast/",
    image: "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-865962992.jpg?w=600",
    publishedAt: "03-02-2022",
    likes: 50,
    dislikes: 50,
    content: "Dolby Laboratories today announced that it has acquired Millicast, a WebRTC-based developer platform for building ultra-low-latency video streaming experiences, as it works to build out its developer… [+2478 chars]"
  }
] 

module.exports = {data};