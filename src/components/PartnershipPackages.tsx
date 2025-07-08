import React, { useState, useEffect } from 'react';
import { Check, X, Crown, Diamond, Shield, Star, Award, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

const PartnershipPackages = () => {
  const [visiblePackages, setVisiblePackages] = useState<number[]>([]);

  // Partnership deliverables data based on the image
  const deliverables = [
    {
      title: 'Partnership Introduction Post',
      description: 'Social media announcement and introduction'
    },
    {
      title: 'Organization logo on official websites and social media pages',
      description: 'Brand visibility across digital platforms'
    },
    {
      title: 'Organization logo on marketing materials, website, YouTube video conclusions and the partnership section of the magazine',
      description: 'Comprehensive brand integration'
    },
    {
      title: 'Speech at the launching ceremony of Exposition Issue 21',
      description: 'Speaking opportunity at main event'
    },
    {
      title: 'Opportunity to conduct a "How You Did It" Session',
      description: 'Educational session leadership'
    },
    {
      title: 'Advertisement in the Exposition Magazine',
      description: 'Print advertisement placement'
    },
    {
      title: 'Duration of the introductory/ promotional video',
      description: 'Video content duration allocation'
    },
    {
      title: 'Banners to be displayed at the Exposition magazine launch ceremony',
      description: 'Physical banner display rights'
    },
    {
      title: 'Duration of the sessions/workshops done at the industrial week',
      description: 'Workshop time allocation'
    },
    {
      title: 'Exhibition booth/ space at the Career Fair',
      description: 'Physical booth space allocation'
    }
  ];

  // Partnership tiers with exact specifications from image
  const partnerships = [
    {
      id: 'title',
      name: 'TITLE PARTNER',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
      features: {
        'Partnership Introduction Post': true,
        'Organization logo on official websites and social media pages': true,
        'Organization logo on marketing materials': true,
        'Speech at launching ceremony': true,
        'How You Did It Session': true,
        'Advertisement in Magazine': { type: 'text', value: 'Full Page Back Cover' },
        'Video Duration': { type: 'text', value: '5 mins' },
        'Banners at Launch': { type: 'text', value: '08' },
        'Workshop Duration': { type: 'text', value: 'Full Day' },
        'Career Fair Booth': true
      }
    },
    {
      id: 'platinum',
      name: 'PLATINUM PARTNER',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500',
      textColor: 'text-white',
      features: {
        'Partnership Introduction Post': true,
        'Organization logo on official websites and social media pages': true,
        'Organization logo on marketing materials': true,
        'Speech at launching ceremony': false,
        'How You Did It Session': false,
        'Advertisement in Magazine': { type: 'text', value: 'Full Page' },
        'Video Duration': { type: 'text', value: '3 mins' },
        'Banners at Launch': { type: 'text', value: '05' },
        'Workshop Duration': { type: 'text', value: 'Half Day' },
        'Career Fair Booth': true
      }
    },
    {
      id: 'gold',
      name: 'GOLD PARTNER',
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      features: {
        'Partnership Introduction Post': true,
        'Organization logo on official websites and social media pages': true,
        'Organization logo on marketing materials': true,
        'Speech at launching ceremony': false,
        'How You Did It Session': false,
        'Advertisement in Magazine': { type: 'text', value: 'Half Page' },
        'Video Duration': { type: 'text', value: '2 mins' },
        'Banners at Launch': { type: 'text', value: '03' },
        'Workshop Duration': { type: 'text', value: 'One Hour' },
        'Career Fair Booth': true
      }
    },
    {
      id: 'silver',
      name: 'SILVER PARTNER',
      color: 'from-gray-300 to-gray-500',
      bgColor: 'bg-gray-400',
      textColor: 'text-black',
      features: {
        'Partnership Introduction Post': true,
        'Organization logo on official websites and social media pages': false,
        'Organization logo on marketing materials': true,
        'Speech at launching ceremony': false,
        'How You Did It Session': false,
        'Advertisement in Magazine': { type: 'text', value: 'Quarter Page' },
        'Video Duration': { type: 'text', value: '1 min' },
        'Banners at Launch': { type: 'text', value: '02' },
        'Workshop Duration': false,
        'Career Fair Booth': true
      }
    },
    {
      id: 'bronze',
      name: 'BRONZE PARTNER',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-600',
      textColor: 'text-white',
      features: {
        'Partnership Introduction Post': true,
        'Organization logo on official websites and social media pages': false,
        'Organization logo on marketing materials': true,
        'Speech at launching ceremony': false,
        'How You Did It Session': false,
        'Advertisement in Magazine': { type: 'text', value: '1/8 Page' },
        'Video Duration': { type: 'text', value: '30 sec' },
        'Banners at Launch': { type: 'text', value: '01' },
        'Workshop Duration': false,
        'Career Fair Booth': false
      }
    }
  ];

  // Partnership team members
  const teamMembers = [
    {
      name: 'Lavindu Binuwara',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'lavindubinuwara1@gmail.com',
      phone: '+94 71 684 6120',
      linkedin: 'Linkedin - Lavindu Binuwara'
    },
    {
      name: 'Hashani Uduwage',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'uduwageh@gmail.com',
      phone: '+94 77 247 4149',
      linkedin: 'Linkedin - Hashani Uduwage'
    },
    {
      name: 'Akila Benaragama',
      role: 'Partnership Coordinator',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'akilabenaragama@gmail.com',
      phone: '+94 77 582 6664',
      linkedin: 'Linkedin - Akila Benaragama'
    },
    {
      name: 'Nevindi Munasinghe',
      role: 'Partnership Coordinator',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'nevindimunasinghe@gmail.com',
      phone: '071 684 6120',
      linkedin: 'Linkedin - Nevindi Munasinghe'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePackages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const packageElements = document.querySelectorAll('.package-card');
    packageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderFeatureCell = (partnership: any, featureKey: string) => {
    const feature = partnership.features[featureKey];
    
    if (feature === true) {
      return (
        <div className="flex justify-center">
          <div className={`w-8 h-8 ${partnership.bgColor} rounded-full flex items-center justify-center`}>
            <Check className={`h-5 w-5 ${partnership.textColor}`} />
          </div>
        </div>
      );
    } else if (feature === false) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <X className="h-5 w-5 text-white" />
          </div>
        </div>
      );
    } else if (typeof feature === 'object' && feature.type === 'text') {
      return (
        <div className={`text-center py-2 px-3 ${partnership.bgColor} ${partnership.textColor} rounded-lg text-sm font-medium`}>
          {feature.value}
        </div>
      );
    }
    
    return null;
  };

  return (
    <section id="partnership-packages" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa7d39]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Partnership Investment
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Partnership Summary
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive overview of deliverables and benefits for each partnership tier
          </p>
        </div>

        {/* Partnership Summary Table */}
        <div className="mb-16 overflow-x-auto">
          <div className="min-w-[1000px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                DELIVERABLES
              </span>
            </h3>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 mb-6">
              <div className="text-white font-bold text-lg">DELIVERABLES</div>
              {partnerships.map((partnership) => (
                <div key={partnership.id} className="text-center">
                  <div className={`${partnership.bgColor} ${partnership.textColor} py-3 px-2 rounded-lg font-bold text-sm`}>
                    {partnership.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {/* Partnership Introduction Post */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Partnership Introduction Post</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Partnership Introduction Post')}
                  </div>
                ))}
              </div>

              {/* Organization logo on official websites */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Organization logo on official websites and social media pages</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Organization logo on official websites and social media pages')}
                  </div>
                ))}
              </div>

              {/* Organization logo on marketing materials */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Organization logo on marketing materials, website, YouTube video conclusions and the partnership section of the magazine</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Organization logo on marketing materials')}
                  </div>
                ))}
              </div>

              {/* Speech at launching ceremony */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Speech at the launching ceremony of Exposition Issue 21</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Speech at launching ceremony')}
                  </div>
                ))}
              </div>

              {/* How You Did It Session */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Opportunity to conduct a "How You Did It" Session</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'How You Did It Session')}
                  </div>
                ))}
              </div>

              {/* Advertisement in Magazine */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Advertisement in the Exposition Magazine</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Advertisement in Magazine')}
                  </div>
                ))}
              </div>

              {/* Video Duration */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Duration of the introductory/ promotional video</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Video Duration')}
                  </div>
                ))}
              </div>

              {/* Banners at Launch */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Banners to be displayed at the Exposition magazine launch ceremony</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Banners at Launch')}
                  </div>
                ))}
              </div>

              {/* Workshop Duration */}
              <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-700/30">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Duration of the sessions/workshops done at the industrial week</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Workshop Duration')}
                  </div>
                ))}
              </div>

              {/* Career Fair Booth */}
              <div className="grid grid-cols-6 gap-4 items-center py-4">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="text-white font-medium text-sm">Exhibition booth/ space at the Career Fair</div>
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id}>
                    {renderFeatureCell(partnership, 'Career Fair Booth')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                Partnership Team
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our dedicated partnership team who will work closely with you to ensure your partnership goals are achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-[#aa7d39]/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#aa7d39]/30 group-hover:border-[#e3c767]/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#e3c767] transition-colors duration-300">
                    {member.name}
                  </h4>
                  
                  <p className="text-[#e3c767] text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Mail className="h-3 w-3" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Phone className="h-3 w-3" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Linkedin className="h-3 w-3" />
                      <span>{member.linkedin}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-[#aa7d39]/20 rounded-3xl p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                  Ready to Partner With Us?
                </span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how we can create a customized partnership that delivers exceptional value for your organization and our university community
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#aa7d39] to-[#e3c767] hover:from-[#e3c767] hover:to-[#aa7d39] text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#aa7d39]/25">
                  <div className="flex items-center space-x-3">
                    <span>Contact Partnership Team</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                <button className="group relative overflow-hidden border-2 border-[#aa7d39]/50 hover:border-[#e3c767] text-white hover:text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10">Download Partnership Guide</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPackages;