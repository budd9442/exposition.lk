import React from 'react';
import { Check, X } from 'lucide-react';

const PartnershipSummary = () => {
  // Partnership tiers with exact colors from the image
  const partnerships = [
    {
      id: 'title',
      name: 'TITLE PARTNER',
      bgColor: 'bg-purple-600',
      textColor: 'text-white'
    },
    {
      id: 'platinum',
      name: 'PLATINUM PARTNER',
      bgColor: 'bg-gray-500',
      textColor: 'text-white'
    },
    {
      id: 'gold',
      name: 'GOLD PARTNER',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white'
    },
    {
      id: 'silver',
      name: 'SILVER PARTNER',
      bgColor: 'bg-gray-300',
      textColor: 'text-black'
    },
    {
      id: 'bronze',
      name: 'BRONZE PARTNER',
      bgColor: 'bg-orange-600',
      textColor: 'text-white'
    }
  ];

  // Deliverables with exact features from the image
  const deliverables = [
    {
      title: 'Partnership Introduction Post',
      features: [true, true, true, true, true]
    },
    {
      title: 'Organization logo on official websites and social media pages',
      features: [true, true, true, false, true]
    },
    {
      title: 'Organization logo on marketing materials, website, YouTube video conclusions and the partnership section of the magazine',
      features: [true, true, true, true, true]
    },
    {
      title: 'Speech at the launching ceremony of Exposition Issue 21',
      features: [true, false, false, false, false]
    },
    {
      title: 'Opportunity to conduct a "How You Did It" Session',
      features: [true, false, false, false, false]
    },
    {
      title: 'Advertisement in the Exposition Magazine',
      features: [
        { type: 'text', value: 'Full Page Back Cover', color: 'bg-purple-600' },
        { type: 'text', value: 'Full Page', color: 'bg-gray-500' },
        { type: 'text', value: 'Half Page', color: 'bg-yellow-600' },
        { type: 'text', value: 'Quarter Page', color: 'bg-gray-300' },
        { type: 'text', value: '1/8 Page', color: 'bg-orange-600' }
      ]
    },
    {
      title: 'Duration of the introductory/ promotional video',
      features: [
        { type: 'text', value: '5 mins', color: 'bg-purple-600' },
        { type: 'text', value: '3 mins', color: 'bg-gray-500' },
        { type: 'text', value: '2 mins', color: 'bg-yellow-600' },
        { type: 'text', value: '1 min', color: 'bg-gray-300' },
        { type: 'text', value: '30 sec', color: 'bg-orange-600' }
      ]
    },
    {
      title: 'Banners to be displayed at the Exposition magazine launch ceremony',
      features: [
        { type: 'text', value: '08', color: 'bg-purple-600' },
        { type: 'text', value: '05', color: 'bg-gray-500' },
        { type: 'text', value: '03', color: 'bg-yellow-600' },
        { type: 'text', value: '02', color: 'bg-gray-300' },
        { type: 'text', value: '01', color: 'bg-orange-600' }
      ]
    },
    {
      title: 'Duration of the sessions/workshops done at the industrial week',
      features: [
        { type: 'text', value: 'Full Day', color: 'bg-purple-600' },
        { type: 'text', value: 'Half Day', color: 'bg-gray-500' },
        { type: 'text', value: 'One Hour', color: 'bg-yellow-600' },
        false,
        false
      ]
    },
    {
      title: 'Exhibition booth/ space at the Career Fair',
      features: [true, true, true, true, false]
    }
  ];

  const renderFeatureCell = (feature: any, partnershipIndex: number) => {
    const partnership = partnerships[partnershipIndex];
    
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
      const textColor = feature.color === 'bg-gray-300' ? 'text-black' : 'text-white';
      return (
        <div className={`text-center py-2 px-3 ${feature.color} ${textColor} rounded-lg text-sm font-medium mx-auto max-w-fit`}>
          {feature.value}
        </div>
      );
    }
    
    return null;
  };

  return (
    <section id="partnership-packages" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Partnership Summary Table */}
        <div className="rounded-3xl p-8">
          {/* <h2 className="text-3xl font-bold text-white mb-8">
            Partnership Summary
          </h2> */}

          {/* Table Container */}
          <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 mb-6">
                <div className="text-white font-bold text-lg bg-gray-800 p-4 rounded-lg">
                  DELIVERABLES
                </div>
                {partnerships.map((partnership) => (
                  <div key={partnership.id} className="text-center">
                    <div className={`${partnership.bgColor} ${partnership.textColor} py-3 px-2 rounded-lg font-bold text-sm`}>
                      {partnership.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Rows */}
              <div className="space-y-3">
                {deliverables.map((deliverable, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-6 gap-4 items-center">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-white font-medium text-sm leading-tight">
                        {deliverable.title}
                      </div>
                    </div>
                    {deliverable.features.map((feature, colIndex) => (
                      <div key={colIndex} className="flex justify-center items-center min-h-[60px]">
                        {renderFeatureCell(feature, colIndex)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSummary;