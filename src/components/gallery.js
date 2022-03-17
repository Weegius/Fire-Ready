import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import NavBar from './nav';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Gallery =() => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      "name": "August Complex Fire",
      "date": "2020-08-01T00:00:00.000Z",
      "county": "Mendocino, Humboldt, Trinity, Tehama, Glenn, Lake, Colusa",
      "acres": "1,032,648",
      "houses": "935",
      "deaths": "1",
      "image": "https://imengine.prod.srp.navigacloud.com/?uuid=d6b5b5fd-5bfa-5ea3-b4ed-f698e2e7ab95&type=primary&q=72&width=1024",
      "info": "The August Complex was a massive wildfire that burned in the Coast Range of Northern California, in Glenn, Lake, Mendocino, Tehama, Trinity, and Shasta Counties. The complex originated as 38 separate fires started by lightning strikes on August 16–17, 2020. "
    },
    {
      "name": "Dixie Fire",
      "date": "2021-07-01T00:00:00.000Z",
      "county": "Butte, Plumas, Lassen, Shasta, Tehama",
      "acres": "963,309",
      "houses": "1,329",
      "deaths": "1",
      "image": "https://ww2.kqed.org/app/uploads/sites/10/2021/07/DixieFirePyrocumulus-1020x695.jpg",
      "info": "The Dixie Fire was an enormous wildfire in Butte, Plumas, Lassen, Shasta, and Tehama Counties, California. It is named after the creek near where it started."
    },
    {
      "name": "SCU Lightning Complex",
      "date": "2020-08-01T00:00:00.000Z",
      "county": "Stanislaus, Santa Clara, Alameda, Contra Costa, San Joaquin",
      "acres": "396,624",
      "houses": "222",
      "deaths": "0",
      "image": "https://s.hdnux.com/photos/01/13/52/17/19833846/6/rawImage.jpg",
      "info": "The SCU (Santa Clara Unit) Lightning Complex fires were wildfires that burned in the Diablo Range in California in August and September 2020. The fire complex consisted of fires in Santa Clara, Alameda, Contra Costa, San Joaquin, Merced, and Stanislaus counties. The name is derived from the three-letter designation given to the California Department of Forestry and Fire Protection (Cal Fire) division responsible for the Santa Clara, Alameda, Contra Costa, and parts of San Joaquin and Stanislaus counties, and the complex consisted of several distinct fires occurring in this region."
    },
    {
      "name": "Creek Fire",
      "date": "2020-09-01T00:00:00.000Z",
      "county": "Fresno, Madera",
      "acres": "379,895",
      "houses": "853",
      "deaths": "0",
      "image": "https://sjvsun.com/wp-content/uploads/2020/09/SUNP-CreekFire.png",
      "info": "The Creek Fire was a large wildfire which started on September 4, 2020, near Shaver Lake, California. The Creek Fire was the fifth-largest wildfire in modern California history, and the second-largest single fire not part of a greater complex."
    },
    {
      "name": "LNU Lightning Complex Fire",
      "date": "2020-08-01T00:00:00.000Z",
      "county": "Napa, Solano, Sonoma, Yolo, Lake, Colusa",
      "acres": "363,220",
      "houses": "1,491",
      "deaths": "6",
      "image": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_17/3468853/210428-lake-berryessa-lnu-lightning-complex-fire-2020-ac-1118p.jpg",
      "info": "The LNU Lightning Complex fires were a large complex of wildfires that burned during the 2020 California wildfire season across much of the Wine Country area of Northern California – Lake, Napa, Sonoma, Solano, and Yolo Counties, from August 17 to October 2, 2020. The complex was composed of numerous lightning-sparked fires, most of which were small. However, while they initially started separate from each other, the Hennessey Fire eventually grew to merge with the Gamble, Green, Markley, Spanish, and Morgan Fires"
    },
    {
      "name": "North Complex Fir",
      "date": "2020-08-01T00:00:00.000Z",
      "county": "Butte, Plumas, Yuba",
      "acres": "318,935",
      "houses": "2,352",
      "deaths": "15",
      "image": "https://www.sacbee.com/latest-news/6qj4eb/picture245631225/alternates/FREE_1140/CaliforniaWildfires33.JPG",
      "info": "The North Complex Fire was a massive wildfire complex that burned in the Plumas National Forest in Northern California in the counties of Plumas and Butte. 21 fires were started by lightning on August 17, 2020; by September 5, all the individual fires had been put out with the exception of the Claremont and Bear Fires, which merged on that date, and the Sheep Fire, which was then designated a separate incident."
    },
    {
      "name": "Thomas Fire",
      "date": "2017-12-01T00:00:00.000Z",
      "county": "Ventura, Santa Barbara",
      "acres": "281,893",
      "houses": "1,063",
      "deaths": "2",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/171215183408-california-fire-1213-restricted-super-169.jpg",
      "info": "The Thomas Fire was a massive wildfire that affected Ventura and Santa Barbara Counties, and one of multiple wildfires that ignited in southern California in December 2017"
    },
    {
      "name": "Cedar Fire",
      "date": "2003-10-01T00:00:00.000Z",
      "county": "San Diego",
      "acres": "273,246",
      "houses": "2,820",
      "deaths": "15",
      "image": "https://cdn.kpbs.org/dims4/default/0fd086b/2147483647/strip/true/crop/504x310+0+10/resize/880x542!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.amazonaws.com%2Fimg%2Fphotos%2F2013%2F10%2F08%2Fcedar1.jpeg",
      "info": "The Cedar Fire was a massive, highly-destructive wildfire, which burned land in San Diego County, California, during October and November 2003. The fire's rapid growth was driven by the Santa Ana wind, causing the fire to spread at a rate of 3,600 acres per hour."
    },
    {
      "name": "Rush Fire",
      "date": "2012-08-01T07:00:00.000Z",
      "county": "Lassen",
      "acres": "271,911 CA / 43,666 NV",
      "houses": "0",
      "deaths": "0",
      "image": "http://www.susanvillestuff.com/roop/wp-content/uploads/2012/08/rushfire081612.jpg",
      "info": "The Rush Fire was the largest wildfire of the 2012 California wildfire season. The fire, which started in Lassen County, California, eventually spread into Washoe County, Nevada."
    },
    {
      "name": "Rim Fire",
      "date": "2013-08-01T07:00:00.000Z",
      "county": "Tuolumne",
      "acres": "257,314",
      "houses": "112",
      "deaths": "0",
      "image": "https://www.myyosemitepark.com/wp-content/uploads/2015/05/yosemite-rim-fire.jpg",
      "info": "The Rim Fire was a massive wildfire that started in a remote canyon in Stanislaus National Forest, in California. This portion of the central Sierra Nevada spans Tuolumne and Mariposa counties."
    },
    {
      "name": "Zaca Fire",
      "date": "2007-07-01T07:00:00.000Z",
      "county": "Santa Barbara",
      "acres": "240,207",
      "houses": "1",
      "deaths": "0",
      "image": "https://www.noozhawk.com/images/uploads/zaca-fire-out-5.jpg",
      "info": "The Zaca Fire was a wildfire that began burning in the San Rafael Mountains, northeast of the Santa Ynez Valley in Santa Barbara County, California. It was also the single largest wildfire of the 2007 California wildfire season."
    },
    {
      "name": "Carr Fire",
      "date": "2018-07-01T07:00:00.000Z",
      "county": "Shasta County, Trinity",
      "acres": "229,651",
      "houses": "1,614",
      "deaths": "8",
      "image": "https://calhum.org/wp-content/uploads/2020/02/fireee.jpg",
      "info": "The Carr Fire was a large wildfire that burned in Shasta and Trinity Counties in California, United States. The Carr Fire destroyed at least 1,604 structures (at least 1,077 were homes) while damaging 277 others, becoming at the time the sixth-most destructive fire in California history (now the seventh-most destructive fire), as well as the twelfth-largest wildfire recorded in modern California history (seventh-largest at the time)."
    },
    {
      "name": "Monument Fire",
      "date": "2021-07-01T07:00:00.000Z",
      "county": "Trinity",
      "acres": "223,124",
      "houses": "50",
      "deaths": "0",
      "image": "https://krcrtv.com/resources/media2/16x9/full/1015/center/80/5744e71b-7fd2-4235-b6e0-edf234f5b43d-large16x9_MonumentFire.jpg",
      "info": "The Monument Fire (formerly known as the Panther Fire) is a wildfire that burnt west of Big Bar in Shasta-Trinity National Forest, Trinity County, California in the United States. The fire, which was started by a lightning strike, was first reported on July 30, 2021."
    },
    {
      "name": "Caldor Fire",
      "date": "2021-08-01T07:00:00.000Z",
      "county": "Alpine, Amador, El Dorado",
      "acres": "221,835",
      "houses": "1,003",
      "deaths": "1",
      "image": "https://www.gannett-cdn.com/presto/2021/08/23/PREN/a517158e-0ecc-48b1-a3b9-dcdaa099271b-AP21234306756047.jpg?crop=5003,2815,x0,y144&width=660&height=372&format=pjpg&auto=webp",
      "info": "The Caldor Fire was a wildfire that burned in El Dorado and Amador counties in the Sierra Nevada mountains of California.  On August 30, it became just the second fire known to have crossed the Sierra Nevada mountain range, following the Dixie Fire which crossed a few days earlier on August 18."
    },
    {
      "name": "Matilija ",
      "date": "1932-09-01T08:00:00.000Z",
      "county": "Ventura",
      "acres": "220,000",
      "houses": "0",
      "deaths": "0",
      "image": "https://www.noozhawk.com/images/made/images/uploads/slideshows/120817-Thomas-Fire-Wheeler-Canyon-Road-rf-1000x667_2400_1601_80_s_c1.jpg",
      "info": "The Matilija Fire was a major wildfire that burned  in the Santa Barbara National Forest (now the Los Padres National Forest) of Southern California, during the autumn of 1932. The fire is named for Matilija Creek, near the location from which it originated."
    },
    {
      "name": "River Complex Fire",
      "date": "2021-07-01T07:00:00.000Z",
      "county": "Siskiyou, Trinity",
      "acres": "199,343",
      "houses": "122",
      "deaths": "0",
      "image": "https://lcvalley.dailyfly.com/Portals/ID_lcvalley/EasyDNNNews/60024/600600p1352EDNmainWashington-DNR-Chiwaukum-WildFires-2014-2015_WA-DNR_cropped.jpg",
      "info": "The River Complex 2021 was a wildfire complex burning in Klamath National Forest in Siskiyou County, California in the United States. The complex comprises over 20 wildfires that started as a result of lighting strikes during a series of thunderstorms in late July 2021."
    },
    {
      "name": "Witch Fire",
      "date": "2007-10-01T07:00:00.000Z",
      "county": "San Diego",
      "acres": "197,990",
      "houses": "1,650",
      "deaths": "2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Witch_Creek_Fire_at_night.jpg",
      "info": "The Witch Creek Fire, also known as the Witch Fire and the Witch-Guejito–Poomacha Complex Fire, was the second-largest wildfire of the 2007 California wildfire season, and the largest one of the October 2007 California wildfires. "
    },
    {
      "name": "Klamath Theater Complex Fire ",
      "date": "2008-06-01T07:00:00.000Z",
      "county": "Siskiyou",
      "acres": "192,038",
      "houses": "0",
      "deaths": "2",
      "image": "https://api.time.com/wp-content/uploads/2018/08/mendocino-complex-fire-california.jpg?quality=85&w=1200&h=628&crop=1",
      "info": "The Klamath Theater Complex Fire, also known as the Bear Wallow Complex Fire, was the largest wildfire of the 2008 California wildfire season. The complex fire originated as 11 separate wildfires, before merging into a single massive complex fire that lasted for over 3 months."
    },
    {
      "name": "Marble Cone Fire",
      "date": "1977-07-01T07:00:00.000Z",
      "county": "Monterey",
      "acres": "177,866",
      "houses": "0",
      "deaths": "2",
      "image": "https://www.montereyherald.com/wp-content/uploads/2020/07/MCH-L-LOOKBACK-0727.jpg",
      "info": "The Marble Cone Fire was a wildland fire which burned for three weeks in August, 1977 in the Santa Lucia Mountains high country, at the Big Sur area of Monterey County, California."
    },
  ];

  return (
    <>
      <Flex bg={'#1B1814'} fontSize="3xl" justifyContent={'right'} pr={4}>
        <NavBar />
      </Flex>
      <Box
        position={'relative'}
        height={'100vh'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          color={'white'}
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          color={'white'}
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            
            <Box
              key={index}
              height={'2xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize={'cover'}
              backgroundImage={`url(${card.image})`}
              // bgGradient='linear(to-r, #000000, rgba(0, 0, 0, 0.05) )'
              >
                <Box w='100%' h='100%' bgGradient='linear(to-r, #000000, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4) )'>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative" color={'white'}>
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  right='100%'
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.name}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.400">
                    {card.info}
                  </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.400">
                    {card.acres} Acres Burnt
                  </Text>
                </Stack>
              </Container>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
export default Gallery

// return (
  //   <>
  //     <Flex bg={'#1B1814'} fontSize="3xl" justifyContent={'right'} pr={4}>
  //       <NavBar />
  //     </Flex>
  //     <Flex bg={'blue'} h='100'>
  //     </Flex>
  //   </>
  // )