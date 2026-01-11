'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Calendar, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Button } from '../../../components/ui/button';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import Link from 'next/link';
import { useTranslations } from '../../../hooks/useTranslations';
import { useLocale } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../../components/ui/carousel';

export default function NewsDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('latestNews');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';
  
  const newsId = params?.id ? parseInt(params.id as string) : null;

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/${locale}`);
    // Wait for navigation, then scroll to section
    setTimeout(() => {
      const element = document.getElementById('news');
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // News data - in a real app, this would come from an API or database
  const newsItems = [
    {
      id: 1,
      title: t('newsItems.item1.title'),
      description: t('newsItems.item1.description'),
      fullContent: t('newsItems.item1.fullContent') || 'Today, Thursday 25/12/2025, Collide organized a seminar entitled A Beginning for Real Estate. At the beginning of the seminar, the head of the organization, Ms Hawzhin, spoke about the introduction, goals and work of the organization. Then, the seminar was presented by the trainer and consultant in the field of real estate Mr. (Barzan Saber), to introduce young people to the field of real estate and working in the field of real estate. In which the methods of working in the field of real estate, how to start working in real estate and the characteristics of real estate employees, and several other topics, were presented to the participants, and provided an open discussion and questions were presented by the participants.',
      date: '2025-12-25',
      category: t('newsItems.item1.category'),
      images: [
        '/n1/n1.jpg',
        '/n1/n2.jpg',
        '/n1/n3.jpg',
        '/n1/n4.jpg',
      ],
    },
    {
      id: 2,
      title: t('newsItems.item2.title'),
      description: t('newsItems.item2.description'),
      fullContent: t('newsItems.item2.fullContent') || 'We are excited to announce the launch of our comprehensive leadership development program designed specifically for women entrepreneurs looking to scale their businesses. This program offers mentorship, networking opportunities, and practical skills training to help participants achieve their business goals. The program includes workshops on business strategy, financial management, marketing, and leadership skills. Participants will have access to one-on-one mentorship sessions with experienced entrepreneurs and industry experts. Additionally, the program provides networking events where participants can connect with potential partners, investors, and collaborators. We believe this initiative will empower women entrepreneurs to overcome challenges and build successful, sustainable businesses that contribute to economic growth and community development.',
      date: '2024-01-15',
      category: t('newsItems.item2.category'),
      images: [
        '/nn1/nn3.jpg',
        '/nn1/nn1.jpg',
        '/nn1/nn2.jpg',
        '/nn1/nn4.jpg',
        '/nn1/nn5.jpg',
      ],
    },
    {
      id: 3,
      title: t('newsItems.item3.title'),
      description: t('newsItems.item3.description'),
      fullContent: t('newsItems.item3.fullContent') || 'Congratulations to all participants in our annual Youth Innovation Challenge. This year\'s winners showcased exceptional creativity in addressing community challenges. The competition received over 200 submissions from young innovators across the region. The winning projects focused on sustainable solutions for environmental issues, innovative approaches to education, and technology-driven solutions for social problems. The top three winners received cash prizes, mentorship opportunities, and access to our innovation lab facilities. We are proud of all participants who demonstrated passion, creativity, and commitment to making a positive impact in their communities. The challenge not only recognizes outstanding innovation but also provides a platform for young people to develop their ideas and connect with like-minded peers and mentors.',
      date: '2024-01-10',
      category: t('newsItems.item3.category'),
      images: [
        '/nnn1/nnn1.jpg',
        '/nnn1/nnn2.jpg',
        '/nnn1/nnn3.jpg',
      ],
    },
    {
      id: 4,
      title: t('newsItems.item4.title'),
      description: t('newsItems.item4.description'),
      fullContent: t('newsItems.item4.fullContent') || 'We are proud to announce new partnerships that will expand our reach and enhance our ability to serve more communities across the region. These collaborations will bring together resources and expertise to create greater positive change. Our new partners include local businesses, international organizations, educational institutions, and government agencies. These partnerships will enable us to scale our programs, reach more beneficiaries, and leverage diverse expertise and resources. Together, we will work on joint initiatives focusing on leadership development, entrepreneurship support, environmental sustainability, and community empowerment. We believe that collaboration is key to creating lasting impact, and we are excited about the opportunities these partnerships will bring to our communities.',
      date: '2024-01-05',
      category: t('newsItems.item4.category'),
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
  ];

  const newsItem = newsItems.find(item => item.id === newsId);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!api || !newsItem?.images || newsItem.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to the first slide
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api, newsItem?.images]);

  // Track current slide
  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    // Set initial current slide (deferred to avoid synchronous setState)
    const timeoutId = setTimeout(() => {
      updateCurrent();
    }, 0);

    api.on('select', updateCurrent);

    return () => {
      clearTimeout(timeoutId);
      api.off('select', updateCurrent);
    };
  }, [api]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      calendar: 'gregory',
    };
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', options);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      [t('categories.programs')]: 'bg-blue-100 text-blue-600',
      [t('categories.events')]: 'bg-orange-100 text-orange-600',
      [t('categories.partnerships')]: 'bg-green-100 text-green-600',
      [t('categories.news')]: 'bg-red-100 text-red-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  if (!newsItem) {
    return (
      <>
        {/* <Header /> */}
        <section className=" bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">News Not Found</h1>
              <p className="text-gray-600 mb-8">The news article you&apos;re looking for doesn&apos;t exist.</p>
              <Link href={`/${locale}#news`} onClick={handleBackClick}>
                <Button variant="outline">
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  {tCommon('back') || 'Back to News'}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <section className="pt-4 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className={`mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <Link href={`/${locale}#news`} onClick={handleBackClick}>
                <Button variant="ghost" className={`text-gray-600 hover:text-orange-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  {tCommon('back') || 'Back to News'}
                </Button>
              </Link>
            </div>

            {/* News Article */}
            <Card className="overflow-hidden">
              <div className="relative h-[600px] overflow-hidden">
                {newsItem.images && newsItem.images.length > 1 ? (
                  <Carousel className="w-full h-full" setApi={setApi}>
                    <CarouselContent className="h-full">
                      {newsItem.images.map((image, index) => (
                        <CarouselItem key={index} className="h-full pl-0">
                          <div className="relative w-full h-full">
                            <ImageWithFallback
                              src={image}
                              alt={`${newsItem.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {index === 0 && (
                              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                                <Badge className={getCategoryColor(newsItem.category)}>
                                  {newsItem.category}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className={`${isRTL ? 'right-4 left-auto' : 'left-4 right-auto'} bg-white/80 hover:bg-white`} />
                    <CarouselNext className={`${isRTL ? 'left-4 right-auto' : 'right-4 left-auto'} bg-white/80 hover:bg-white`} />
                    {/* Slide indicators */}
                    <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {newsItem.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          className={`h-2 rounded-full transition-all ${
                            current === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </Carousel>
                ) : (
                  <>
                    <ImageWithFallback
                      src={newsItem.images?.[0] || '/lead-photo.jpg'}
                      alt={newsItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                      <Badge className={getCategoryColor(newsItem.category)}>
                        {newsItem.category}
                      </Badge>
                    </div>
                  </>
                )}
              </div>
              
              <CardContent className="p-8">
                <div className={`flex items-center text-sm text-gray-500 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span suppressHydrationWarning>{formatDate(newsItem.date)}</span>
                </div>
                
                <h1 className={`text-3xl font-bold text-gray-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {newsItem.title}
                </h1>
                
                <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {newsItem.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {newsItem.fullContent}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

