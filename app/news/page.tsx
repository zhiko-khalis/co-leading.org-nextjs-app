'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'New Leadership Program Launched for Women Entrepreneurs',
      description: 'We are excited to announce the launch of our comprehensive leadership development program designed specifically for women entrepreneurs looking to scale their businesses. This program offers mentorship, networking opportunities, and practical skills training to help participants achieve their business goals.',
      date: '2024-01-15',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVudHJlcHJlbmV1cnN8ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    },
    {
      id: 2,
      title: 'Youth Innovation Challenge Winners Announced',
      description: 'Congratulations to all participants in our annual Youth Innovation Challenge. This year\'s winners showcased exceptional creativity in addressing community challenges. The competition received over 200 submissions from young innovators across the region.',
      date: '2024-01-10',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    },
    {
      id: 3,
      title: 'Partnership with Local Organizations Strengthens Community Impact',
      description: 'We are proud to announce new partnerships that will expand our reach and enhance our ability to serve more communities across the region. These collaborations will bring together resources and expertise to create greater positive change.',
      date: '2024-01-05',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNjExMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    },
    {
      id: 4,
      title: 'Mentorship Program Reaches 500+ Participants Milestone',
      description: 'Our mentorship program has successfully connected over 500 emerging leaders with experienced professionals. This milestone reflects our commitment to fostering growth and development in our community.',
      date: '2023-12-20',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwfGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    },
    {
      id: 5,
      title: 'Annual Leadership Summit 2024 Registration Now Open',
      description: 'Join us for our annual Leadership Summit featuring keynote speakers, interactive workshops, and networking opportunities. Early bird registration is now available with special discounts for students and non-profits.',
      date: '2023-12-15',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwc3VtbWl0fGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    },
    {
      id: 6,
      title: 'Innovation Lab Opens New Location in Regional Hub',
      description: 'We are thrilled to announce the opening of our new Innovation Lab location, providing state-of-the-art facilities for entrepreneurs and innovators to develop their ideas and bring them to life.',
      date: '2023-12-10',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFifGVufDF8fHx8MTc2MjYxMTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readMore: '#'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Programs': 'bg-blue-100 text-blue-600',
      'Events': 'bg-orange-100 text-orange-600',
      'Partnerships': 'bg-green-100 text-green-600',
      'News': 'bg-red-100 text-red-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <>
      <Header />
      <section id="news" className="pt-24 py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            {/* <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div> */}

            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="mb-4 text-red-600 font-bold text-3xl">Latest News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest programs, events, and initiatives making a difference in our communities.
              </p>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.date)}
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {item.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group"
                      onClick={() => window.location.href = item.readMore}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
